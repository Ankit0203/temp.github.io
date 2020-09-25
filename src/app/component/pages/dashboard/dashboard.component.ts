import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { TableService } from './ngtable.service';
import { Table } from './ngtable';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers : [TableService]
})

export class DashboardComponent {
  csearchTerm:'';
  clientList = this.tableService.getTable();
  cfilterClient:Table[]|null=null;
  page = 1;
  pageSize = 2;
  totalLengthOfCollection: number=0;
  cpage = 1;
  cpageSize = 4;

  constructor(private tableService: TableService) {
    this.cfilterClient = this.clientList;
    this.totalLengthOfCollection = this.cfilterClient.length;
  }

  ngOnInit() {
  }

}
