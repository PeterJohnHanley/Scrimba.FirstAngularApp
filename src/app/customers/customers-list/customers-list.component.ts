import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

    filteredCustomers: ICustomer[] = [];
    customersOrderTotal: number = 0;
    currencyCode: string = 'AUD';
    
    constructor() {}
    
    ngOnInit() {

    }

    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal ?? 0;
        });
    }    
    
    sort(prop: string) {
        // A sorter service will handle the sorting
    }
}