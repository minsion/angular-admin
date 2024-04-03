import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';

@Component({
    moduleId: module.id,
    templateUrl: './notifications.html',
})
export class NotificationsComponent {
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

    showMessage(msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, duration = 3000) {
        const toast = Swal.mixin({
            toast: true,
            position: <any>(position || 'bottom-start'),
            showConfirmButton: false,
            timer: duration,
            showCloseButton: showCloseButton,
        });
        toast.fire({
            title: msg,
        });
    }

    clickCallable() {
        Swal.fire({
            toast: true,
            position: 'bottom-start',
            text: 'Custom callback when action button is clicked.',
            showCloseButton: true,
            showConfirmButton: false,
        }).then((result) => {
            Swal.fire({
                toast: true,
                position: 'bottom-start',
                text: 'Thanks for clicking the Dismiss button!',
                showCloseButton: true,
                showConfirmButton: false,
            });
        });
    }

    coloredToast(color: string) {
        const toast = Swal.mixin({
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
            customClass: {
                popup: `color-${color}`,
            },
            target: document.getElementById(color + '-toast') || 'body',
        });
        toast.fire({
            title: 'Example notification text.',
        });
    }
}
