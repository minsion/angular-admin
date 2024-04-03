import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './pricing-table.html',
})
export class PricingTableComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor() {}
    yearlyPrice: Boolean = false;
}
