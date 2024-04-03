import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
    moduleId: module.id,
    templateUrl: './clipboard.html',
})
export class ClipboardComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor() {}

    message1 = 'http://www.admin-dashboard.com';
    message2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';

    showMessage(msg = '', type = 'success') {
        const toast: any = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    }
}
