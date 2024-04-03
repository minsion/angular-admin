import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppService } from '../service/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './auth-layout.html',
})
export class AuthLayout {
    store: any;
    showTopButton = false;
    constructor(public storeData: Store<any>, private service: AppService) {
        this.initStore();
    }
    headerClass = '';
    ngOnInit() {
        this.toggleLoader();
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                this.showTopButton = true;
            } else {
                this.showTopButton = false;
            }
        });
    }

    toggleLoader() {
        this.storeData.dispatch({ type: 'toggleMainLoader', payload: true });
        setTimeout(() => {
            this.storeData.dispatch({ type: 'toggleMainLoader', payload: false });
        }, 500);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', () => {});
    }

    async initStore() {
        this.storeData
            .select((d) => d.index)
            .subscribe((d) => {
                this.store = d;
            });
    }

    goToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
