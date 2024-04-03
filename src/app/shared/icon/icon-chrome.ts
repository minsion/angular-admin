import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-chrome',
    template: `
        <ng-template #template>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                [ngClass]="class"
            >
                <circle cx="12" cy="12" r="10"></circle>
                <circle opacity="0.5" cx="12" cy="12" r="4"></circle>
                <line opacity="0.5" x1="21.17" y1="8" x2="12" y2="8"></line>
                <line opacity="0.5" x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                <line opacity="0.5" x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
            </svg>
        </ng-template>
    `,
})
export class IconChromeComponent {
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
