import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './input-mask.html',
})
export class InputMaskComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor() {}
    mask1 = [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    mask2 = [/[A-Za-z]/,/[A-Za-z]/, '-', /\d/, /\d/, /\d/, /\d/];
    mask3 = [/\d/, /\d/, '.', /\d/];
    mask4 = [/\d/, /\d/, '.', /\d/, /\d/];
    mask5 = [/\d/, '-',  /[A-Z,a-z]/, /[A-Z,a-z]/, /[A-Z,a-z]/, /\d/, /\d/, /\d/];
    mask6 = [/[A-Z,a-z]/, /[A-Z,a-z]/, '-', /\d/, /\d/, /\d/, /\d/];
    mask7 = [/[A-Z,a-z]/, /[A-Z,a-z]/, '-', /\d/, /\d/,];
    mask8 = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    mask9 = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    mask10 = [/\d/, /\d/, ' ', 'D','e','c','e','m', 'b','e', 'r', ' ', /\d/, /\d/, /\d/, /\d/];
    mask11 = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/];
    mask12 =  ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    mask13 = ['$', /\d/, /\d/, /\d/, ',', /\d/, /\d/, /\d/, /\d/, ',', /\d/, /\d/, /\d/, '.', /\d/, /\d/];
}
