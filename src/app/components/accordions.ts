import { Component } from '@angular/core';
import { slideDownUp } from '../shared/animations';

@Component({
    moduleId: module.id,
    templateUrl: './accordions.html',
    animations: [slideDownUp],
})
export class AccordionsComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor() {}

    accordians1:any = 1;
    accordians2:any = 1;
    accordians3:any = 1;
    accordians4:any = 1;
}
