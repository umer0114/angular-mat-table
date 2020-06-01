import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatTableModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    MatButtonModule,
    DragDropModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    DragDropModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule],
})
export class MaterialTableModule {
}
