import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableComponent } from './mat-table/mat-table.component';
import {MaterialTableModule} from './mat-table/mat-table.module';
import { MatTableMultiFilterComponent } from './mat-table-multi-filter/mat-table-multi-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MatTableComponent,
    MatTableMultiFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
