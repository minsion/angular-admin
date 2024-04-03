import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './jumbotron.html',
})
export class JumbotronComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor() {}
}
