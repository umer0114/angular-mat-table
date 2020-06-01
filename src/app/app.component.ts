import { Component, OnInit} from '@angular/core';

export interface Student {
  index: number;
  studentId: number;
  name: string;
  grade: string;
  major: string;
}

const StudentsData: Student[] = [
  {index: 1, studentId : 111, name: 'Ally Chan', major: 'Major 1', grade: 'A'},
  {index: 2, studentId : 222, name: 'Maggie Chan', major: 'Major 2', grade: 'A'},
  {index: 3, studentId : 999, name: 'Maggie Young', major: 'Major 3', grade: 'B'},
  {index: 4, studentId : 999, name: 'Student 4', major: 'Major 4', grade: 'B'},
  {index: 5, studentId : 999, name: 'Student 5', major: 'Major 5', grade: 'C'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-material-table';
  studentsData;
  constructor() {}

  ngOnInit() {
    this.studentsData = StudentsData;
  }
}
