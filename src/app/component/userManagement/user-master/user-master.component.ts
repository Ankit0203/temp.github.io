import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { Table } from '../../pages/dashboard/ngtable';
import { TableService } from '../../pages/dashboard/ngtable.service';


@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css'],
  providers : [TableService]
})
export class UserMasterComponent {
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
