import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridOptionsComponentComponent } from '../app/grid-options-component/grid-options-component.component';
import { AgGridInitialComponent } from '../app/ag-grid-initial/ag-grid-initial.component';
import { AgGridServerSideFilterationComponent } from '../app/ag-grid-server-side-filteration/ag-grid-server-side-filteration.component';

const routes: Routes = [

  {
    path:'gridOpt', component: GridOptionsComponentComponent
   
  }, 
  {
    path:'agGridInitial', component: AgGridInitialComponent
  },
  {
    path:'serverSideFilteration', component: AgGridServerSideFilterationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
