import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-calendar',
    template: `
        <ng-template #template>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <path
                    d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
                <path opacity="0.5" d="M7 4V2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path opacity="0.5" d="M17 4V2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path opacity="0.5" d="M2 9H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        </ng-template>
    `,
})
export class IconCalendarComponent {
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
