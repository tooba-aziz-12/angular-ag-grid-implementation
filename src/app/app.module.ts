import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GridOptionsComponentComponent } from './grid-options-component/grid-options-component.component';
import { AgGridInitialComponent } from './ag-grid-initial/ag-grid-initial.component';
import { FormsModule } from '@angular/forms';
import { AgGridServerSideFilterationComponent } from './ag-grid-server-side-filteration/ag-grid-server-side-filteration.component';


@NgModule({
  declarations: [
    AppComponent,
    GridOptionsComponentComponent,
    AgGridInitialComponent,
    AgGridServerSideFilterationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
