import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridOptionsComponentComponent } from '../app/grid-options-component/grid-options-component.component';
import { AgGridInitialComponent } from '../app/ag-grid-initial/ag-grid-initial.component';

const routes: Routes = [

  {
    path:'gridOpt', component: GridOptionsComponentComponent
   
  }, 
  {
    path:'agGridInitial', component: AgGridInitialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
