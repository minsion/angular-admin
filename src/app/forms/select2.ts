import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './select2.html',
})
export class Select2Component {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor() {}

    options = ['Orange', 'White', 'Purple'];
    input1 = 'Orange';

    options2 = [
        { name: 'Orange', group_name: 'Group 1' },
        { name: 'White', group_name: 'Group 1' },
        { name: 'Purple', group_name: 'Group 1' },
        { name: 'Yellow', group_name: 'Group 2' },
        { name: 'Red', group_name: 'Group 2' },
        { name: 'Green', group_name: 'Group 2' },
        { name: 'Aqua', group_name: 'Group 3' },
        { name: 'Black', group_name: 'Group 3' },
        { name: 'Blue', group_name: 'Group 3' },
    ];
    input2 =  'Orange';

    options3 = [{ name: 'Orange' }, { name: 'White', disabled: true }, { name: 'Purple' }];
    input3 = 'Orange';

    input4 : string  | undefined;
    input5 : string  | undefined;
    input6 = [];
}
