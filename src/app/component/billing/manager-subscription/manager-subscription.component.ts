import { Component, OnInit } from '@angular/core';
import { TableService } from '../../pages/dashboard/ngtable.service';
import { Table, Manager } from '../../pages/dashboard/ngtable';

@Component({
  selector: 'app-manager-subscription',
  templateUrl: './manager-subscription.component.html',
  styleUrls: ['./manager-subscription.component.scss'],
  providers : [TableService]
})
export class ManagerSubscriptionComponent implements OnInit {
  csearchTerm:'';
  clientList = this.tableService.getManager();
  cfilterClient:Manager[]|null=null;
  page = 1;
  pageSize = 2;
  totalLengthOfCollection: number=0;
  cpage = 1;
  cpageSize = 4;

  constructor(private tableService: TableService) {
    this.cfilterClient = this.clientList;
    this.totalLengthOfCollection = this.cfilterClient.length;
  }

  ngOnInit(): void {
  }

}
