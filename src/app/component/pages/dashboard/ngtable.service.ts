import { Injectable } from '@angular/core';
import { Table, MySubscription, Manager } from './ngtable';
import { tableList, subscription, manager } from './ngtable-data';


@Injectable()
export class TableService {

    public tableList: Table[] = tableList;
    public subscription : MySubscription[] = subscription;
    public manager : Manager[] = manager;

    public getTable() {
        return this.tableList;
    }

    public mySubscription(){
        return this.subscription;
    }

    public getManager(){
        return this.manager
    }
}