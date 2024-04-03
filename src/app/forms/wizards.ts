import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './wizards.html',
})
export class WizardsComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor() {}

    activeTab1 = 1;
    activeTab2 = 1;
    activeTab3 = 1;
    activeTab4 = 1;
    activeTab5 = 1;
    activeTab6 = 1;
    activeTab7 = 1;

}
