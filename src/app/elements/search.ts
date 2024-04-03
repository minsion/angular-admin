import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl: './search.html',
})
export class SearchComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor() {}

    search = '';
    items: any = [
        {
            thumb: 'profile-5.jpeg',
            name: 'Alan Green',
            email: 'alan@mail.com',
            status: 'Active',
            statusClass: 'badge badge-outline-primary',
        },
        {
            thumb: 'profile-11.jpeg',
            name: 'Linda Nelson',
            email: 'Linda@mail.com',
            status: 'Busy',
            statusClass: 'badge badge-outline-danger',
        },
        {
            thumb: 'profile-12.jpeg',
            name: 'Lila Perry',
            email: 'Lila@mail.com',
            status: 'Closed',
            statusClass: 'badge badge-outline-warning',
        },
        {
            thumb: 'profile-3.jpeg',
            name: 'Andy King',
            email: 'Andy@mail.com',
            status: 'Active',
            statusClass: 'badge badge-outline-primary',
        },
        {
            thumb: 'profile-15.jpeg',
            name: 'Jesse Cory',
            email: 'Jesse@mail.com',
            status: 'Busy',
            statusClass: 'badge badge-outline-danger',
        },
    ];
    focus = false;

    filteredItem = this.items || [];

    searchResults() {
        this.filteredItem = this.items.filter((item: any) => {
            return (
                item.name.toLowerCase().includes(this.search.toLowerCase()) ||
                item.email.toLowerCase().includes(this.search.toLowerCase()) ||
                item.status.toLowerCase().includes(this.search.toLowerCase())
            );
        });
    }
}
