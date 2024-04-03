import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppService } from '../service/app.service';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app-layout.html',
})
export class AppLayout {
    store: any;
    showTopButton = false;
    constructor(public translate: TranslateService, public storeData: Store<any>, private service: AppService, private router: Router) {
        this.initStore();
    }
    headerClass = '';
    ngOnInit() {
        this.initAnimation();
        this.toggleLoader();
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                this.showTopButton = true;
            } else {
                this.showTopButton = false;
            }
        });
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', () => {});
    }

    initAnimation() {
        this.service.changeAnimation();
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.service.changeAnimation();
            }
        });

        const ele: any = document.querySelector('.animation');
        ele.addEventListener('animationend', () => {
            this.service.changeAnimation('remove');
        });
    }

    toggleLoader() {
        this.storeData.dispatch({ type: 'toggleMainLoader', payload: true });
        setTimeout(() => {
            this.storeData.dispatch({ type: 'toggleMainLoader', payload: false });
        }, 500);
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
