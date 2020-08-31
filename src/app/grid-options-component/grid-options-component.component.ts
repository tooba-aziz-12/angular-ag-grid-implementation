import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfiniteRowModelModule } from '@ag-grid-community/infinite-row-model';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-grid-options-component',
  templateUrl: './grid-options-component.component.html',
  styleUrls: ['./grid-options-component.component.css']
})
export class GridOptionsComponentComponent {
  public gridApi;
  public gridColumnApi;
  public modules: any[] = [InfiniteRowModelModule];
  public columnDefs;
  public defaultColDef;
  public components;
  public rowBuffer;
  public rowSelection;
  public rowModelType;
  public paginationPageSize;
  public cacheOverflowSize;
  public maxConcurrentDatasourceRequests;
  public infiniteInitialRowCount;
  public maxBlocksInCache;
  public rowData: [];
  constructor(private http:HttpClient) {
    this.columnDefs = [
      {
        headerName: 'ID',
        maxWidth: 100,
        valueGetter: 'node.id',
        cellRenderer: 'loadingRenderer',
      },
      {
        field: 'athlete',
        minWidth: 150,
      },
      { field: 'age' },
      {
        field: 'country',
        minWidth: 150,
      },
      { field: 'year' },
      {
        field: 'date',
        minWidth: 150,
      },
      {
        field: 'sport',
        minWidth: 150,
      },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ];
    this.defaultColDef = {
      flex: 1,
      resizable: true,
      minWidth: 100,
    };
    this.components = {
      loadingRenderer: function(params) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/images/loading.gif">';
        }
      },
    };
    this.rowBuffer = 0;
    this.rowSelection = 'multiple';
    this.rowModelType = 'infinite';
    this.paginationPageSize = 100;
    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 1;
    this.infiniteInitialRowCount = 1000;
    this.maxBlocksInCache = 10;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'
      )
      .subscribe((data : any) => {
        var dataSource = {
          rowCount: null,
          getRows: function(params) {
            console.log(
              'asking for ' + params.startRow + ' to ' + params.endRow
            );
            setTimeout(function() {
              var rowsThisPage = data.slice(params.startRow, params.endRow);
            //  var rowsThisPage = data.slice(params.startRow, params.endRow);
            console.log("rowsThisPage");
            console.log(rowsThisPage);
              var lastRow = -1;
              if (data.length <= params.endRow) {
                lastRow = data.length 
              }
             params.successCallback(rowsThisPage, lastRow);
            }, 500);
          },
        };
        params.api.setDatasource(dataSource);
      });
  }
}
