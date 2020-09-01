import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-ag-grid-server-side-filteration',
  templateUrl: './ag-grid-server-side-filteration.component.html',
  styleUrls: ['./ag-grid-server-side-filteration.component.css']
})
export class AgGridServerSideFilterationComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  public modules: any[] = [ClientSideRowModelModule];
  public columnDefs;
  public defaultColDef;
  public rowData: any[]=[];
  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: 'athlete',
        minWidth: 180,
      },
      {
        field: 'age',
        filter: 'agNumberColumnFilter',
        maxWidth: 80,
      },
      { field: 'country' },
      {
        field: 'year',
        maxWidth: 90,
      },
      {
        field: 'date',
        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: function(filterLocalDateAtMidnight, cellValue) {
            var cellDate = asDate(cellValue);
            if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
          },
        },
      },
      {
        field: 'gold',
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'silver',
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'bronze',
        filter: 'agNumberColumnFilter',
      },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 120,
      filter: true,
    };
   }
   

  ngOnInit(): void {
  }

  externalFilterChanged(newValue) {
    console.log("inside externalFilterChanged");
    console.log(newValue);
    ageType = newValue;
    this.gridApi.onFilterChanged();
  }

  onGridReady(params) {
    console.log("inside onGridReady");
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
      )
      .subscribe((data:any[]) => {
         this.rowData = data;
      });
  }

  isExternalFilterPresent() {
    console.log("inside isExternalFilterPresent");
    // console.log(ageType);
    // console.log(ageType != 'everyone');
    
    return ageType != 'everyone';


  }
  onFilterChanged(){

    console.log("inside onFilterChanged");
    var filterInstance = this.gridApi.getFilterInstance('age');

    console.log(filterInstance);
    console.log(filterInstance.appliedModel);

   var filterState = this.gridApi.getFilterModel();
   console.log(filterState);
    // this filter state will be sent to server to get the filtered data.
    var result = [];
    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
      )
      .subscribe((data:any[]) => {
        for(let i = 0; i < 10; i++){
            result.push(data[i]);
        }
        console.log(this.rowData);
         this.rowData = result;
      });
  }

  doesExternalFilterPass(node) {
    console.log("inside doesExternalFilterPass");
    switch (ageType) {
      case 'below25':
        return node.data.age < 25;
      case 'between25and50':
        return node.data.age >= 25 && node.data.age <= 50;
      case 'above50':
        return node.data.age > 50;
      case 'dateAfter2008':
        return asDate(node.data.date) > new Date(2008, 1, 1);
      default:
        return true;
    }
  }
}

var ageType = 'everyone';
function asDate(dateAsString) {
  var splitFields = dateAsString.split('/');
  return new Date(splitFields[2], splitFields[1], splitFields[0]);
}
