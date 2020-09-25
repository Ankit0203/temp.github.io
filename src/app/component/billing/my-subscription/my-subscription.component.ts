import { Component, OnInit } from '@angular/core';
import { TableService } from '../../pages/dashboard/ngtable.service';
import { Table, MySubscription } from '../../pages/dashboard/ngtable';

@Component({
  selector: 'app-my-subscription',
  templateUrl: './my-subscription.component.html',
  styleUrls: ['./my-subscription.component.scss'],
  providers : [TableService]
})
export class MySubscriptionComponent implements OnInit {
  csearchTerm:'';
  clientList = this.tableService.mySubscription();
  cfilterClient:MySubscription[]|null=null;
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
