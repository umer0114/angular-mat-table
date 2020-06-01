import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';

export interface Student {
  index: number;
  studentId: number;
  name: string;
  grade: string;
  major: string;
}

const disabledStudentId = 999;

const headerConfiguration = [
  { heading: 'index', key: 'index' },
  { heading: 'Student Id', key: 'studentId' },
  { heading: 'Name', key: 'name' },
  { heading: 'Major', key: 'major' },
  { heading: 'Grade', key: 'grade' }
];
@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {
  @Input() data;
  grades: string[];
  majors: string[];
  displayedColumns: string[];
  headerConfigurations;
  dataSource;
  selection;
  disabledStudentId;
  moveAnywhere;
  @ViewChild('table', {static: true}) table: MatTable<any>;

  constructor() {}

  ngOnInit() {
    this.headerConfigurations = headerConfiguration;
    this.displayedColumns = this.headerConfigurations.map(config => config.heading);
    this.dataSource = new MatTableDataSource<Student>(this.data);
    this.selection = new SelectionModel<Student>(true, []);
    this.grades = this.data.map((student => student.grade));
    this.majors = this.data.map((student => student.major));
    console.log('Original data source: ');
    console.log(this.data);

    // Id on which table's row cannot be moved.
    this.disabledStudentId = disabledStudentId;
  }

  swapElements(list, index1, index2) {
    const tempBuffer = list[index1];
    list[index1] = list[index2];
    list[index2] = tempBuffer;
  }

  swapIndexes(list, index1, index2) {
    const tempBuffer = list[index1].index;
    list[index1].index = list[index2].index;
    list[index2].index = tempBuffer;
  }

  onMoveAnyWhereChanged(checked: boolean) {
    this.moveAnywhere = checked;
  }

  dropTable(event: CdkDragDrop<any[]>) {
    const prevIndex = this.dataSource.filteredData.findIndex((d) => d === event.item.data);

    if (this.moveAnywhere || (!this.moveAnywhere && this.data[event.currentIndex].studentId !== this.disabledStudentId)) {
      this.swapIndexes(this.data, prevIndex, event.currentIndex);
      this.swapElements(this.dataSource.filteredData, prevIndex, event.currentIndex);
      console.log('Updated data source: ');
      console.log(this.data);
    } else {
      console.log('Cannot move for student id: ' + this.disabledStudentId);
    }
    this.table.renderRows();
  }
}
