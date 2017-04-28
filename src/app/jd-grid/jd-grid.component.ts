import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-jd-grid',
  templateUrl: './jd-grid.component.html',
  styleUrls: ['./jd-grid.component.css']
})
export class JdGridComponent implements OnInit {
  gridOptions: GridOptions;

  constructor() {
    http.get('people.json').subscribe((res:Response) => this.people = res.json());

     this.gridOptions = {rowHeight: 48};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id"
            },
            {
                headerName: "Value",
                field: "value"
            },

        ];
        this.gridOptions.rowData = [
            {id: 5, value: 10},
            {id: 10, value: 15},
            {id: 15, value: 20}
        ]
  }

  ngOnInit() {
  }

}
