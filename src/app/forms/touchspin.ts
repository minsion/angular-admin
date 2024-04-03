import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './touchspin.html',
})
export class TouchspinComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor() {}

    value1 = 0;
    value2 = 0;
    value3 = 0;
    value4 = 0;
    value5 = 0;
    value6 = 0;
    value7 = 0;
    value8 = 0;
    value9 = 0;
    value10 = 0;
}
