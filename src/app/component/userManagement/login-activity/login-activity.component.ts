import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { Table } from '../../pages/dashboard/ngtable';
import { TableService } from '../../pages/dashboard/ngtable.service';


@Component({
  selector: 'app-login-activity',
  templateUrl: './login-activity.component.html',
  styleUrls: ['./login-activity.component.css'],
  providers : [TableService]
})

export class LoginActivityComponent implements OnInit {
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
