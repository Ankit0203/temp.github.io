import { Component } from '@angular/core';
import { TableService } from '../../pages/dashboard/ngtable.service';
import { Table } from '../../pages/dashboard/ngtable';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-assign-agents-under-trainer',
  templateUrl: './assign-agents-under-trainer.component.html',
  styleUrls: ['./assign-agents-under-trainer.component.css'],
  providers : [TableService]
})
export class AssignAgentsUnderTrainerComponent {
  csearchTerm:'';
  clientList = this.tableService.getTable();
  cfilterClient:Table[]|null=null;
  page = 1;
  pageSize = 2;
  totalLengthOfCollection: number=0;
  cpage = 1;
  cpageSize = 4;
  
  constructor(private tableService: TableService, private modalService: NgbModal) {
    this.cfilterClient = this.clientList;
    this.totalLengthOfCollection = this.cfilterClient.length;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }



}
