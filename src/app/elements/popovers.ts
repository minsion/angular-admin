import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    templateUrl: './popovers.html',
})
export class PopoversComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor(public storeData: Store<any>) {
        this.initStore();
    }
    store: any;
    async initStore() {
        this.storeData
            .select((d) => d.index)
            .subscribe((d) => {
                this.store = d;
            });
    }
}
