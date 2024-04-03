import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'footer',
    templateUrl: './footer.html',
})
export class FooterComponent {
    currYear: number = new Date().getFullYear();
    constructor() {}
    ngOnInit() {}
}
