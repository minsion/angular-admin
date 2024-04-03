import { Component } from '@angular/core';
import { slideDownUp } from '../shared/animations';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    templateUrl: './faq.html',
    animations: [slideDownUp],
})
export class FaqComponent {
    store: any;
    constructor(public storeData: Store<any>) {
        this.initStore();
    }
    async initStore() {
        this.storeData
            .select((d) => d.index)
            .subscribe((d) => {
                this.store = d;
            });
    }
    activeTab: any = 'general';
    active1: any = 1;
    active2: any = 1;
}
