import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTable, MatTableDataSource} from '@angular/material/table';

export interface Student {
  index: number;
  studentId: number;
  name: string;
  grade: string;
  major: string;
}

const gradeToSearch = 'a';

const headerConfiguration = [
  { heading: 'index', key: 'index' },
  { heading: 'Student Id', key: 'studentId' },
  { heading: 'Name', key: 'name' },
  { heading: 'Major', key: 'major' },
  { heading: 'Grade', key: 'grade' }
];

@Component({
  selector: 'app-mat-table-multi-filter',
  templateUrl: './mat-table-multi-filter.component.html',
  styleUrls: ['./mat-table-multi-filter.component.css']
})
export class MatTableMultiFilterComponent implements OnInit {

  @Input() data;
  displayedColumns: string[];
  visibleColumnKeys: string[];
  headerConfigurations;
  dataSource;
  selection;
  disabledStudentId;
  showGradeA = false;
  searchedText = '';
  @ViewChild('table', {static: true}) table: MatTable<any>;

  constructor() {}

  ngOnInit() {
    this.headerConfigurations = headerConfiguration;
    this.displayedColumns = this.headerConfigurations.map(config => config.heading);
    this.visibleColumnKeys = this.headerConfigurations.map(config => config.key);
    this.displayedColumns.unshift('select');
    this.dataSource = new MatTableDataSource<Student>(this.data);
    this.selection = new SelectionModel<Student>(true, []);
    this.dataSource.filterPredicate = (data, filter: any): boolean => {
      filter.name = filter.name || this.searchedText;
      const filterExists = this.visibleColumnKeys.some(
        column => {
          return data[column] && data[column].toString().toLowerCase().includes(filter.name);
        }
      );
      const isGradeA = (this.showGradeA && data.grade.toLowerCase().includes(gradeToSearch) || !this.showGradeA);
      if (!(filterExists && isGradeA)) {
        this.selection.deselect(data);
      }
      return filterExists && isGradeA;
    };
  }

  applyFilter(event: Event) {
    if (event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.searchedText = filterValue.trim().toLowerCase();
      this.dataSource.filter = {name: this.searchedText};
    } else if (this.showGradeA) {
      this.dataSource.filter = {grade: gradeToSearch};
    } else {
      this.dataSource.filter = {};
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.filteredData.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.filteredData.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Student): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.index + 1}`;
  }

  onShowGradeAChanged(showGradeA: boolean) {
    this.showGradeA = showGradeA;
    this.applyFilter(null);
  }
}
