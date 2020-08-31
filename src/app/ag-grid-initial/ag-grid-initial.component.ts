import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {} from "ag-grid-angular";
import {GridOptions} from "@ag-grid-community/all-modules";
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-ag-grid-initial',
  templateUrl: './ag-grid-initial.component.html',
  styleUrls: ['./ag-grid-initial.component.css']
})
export class AgGridInitialComponent {

    title = 'ag-grid-app';
    private gridApi;
    private gridColumnApi;
    public columnDefs;
    public rowData;
    private sortingOrder;
    public gridOptions: GridOptions;
  constructor(private http:HttpClient) {   
    this.columnDefs=[
    {
      headerName:"ID",
      field:"id",
      width:150,
      height:100,
      sortingOrder:["asc","desc"],
      filter:true
    },
    {
      headerName:"Name",
      field:"name",
      width:150,
      height:100,
      filter:true
    },
    {
      headerName:"User Name",
      field:"username",
      width:150,
      height:100,
      filter:true
    },
    {
      headerName:"Address",
      field:"address.street",
      width:150,
      height:100,
    },
    {
      headerName:"Email",
      field:"email",
      width:200,
      height:100,
    },
    {
      headerName:"Phone",
      field:"phone",
      width:200,
      height:100,
    },
    {
      headerName:"Website",
      field:"website",
      width:150,
      height:100,
    },
    {
      headerName:"Company",
      field:"company.name",
      width:150,
      height:100,
    }
  ];
  this.sortingOrder = ["desc","asc", null]; 
  }

 
  onGridReady(params){
    this.gridApi=params.api;
    this.gridColumnApi=params.columnApi;
    
    this.http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe(data=>{
       // this.rowData = data;
       console.log("====data===");
       console.log(data);
        params.api.setRowData(data);
      })
    
  }
}
