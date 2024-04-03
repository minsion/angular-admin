import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-horizontal-dots',
    template: `
        <ng-template #template>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <circle cx="5" cy="12" r="2" stroke="currentColor" stroke-width="1.5" />
                <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" stroke-width="1.5" />
                <circle cx="19" cy="12" r="2" stroke="currentColor" stroke-width="1.5" />
            </svg>
        </ng-template>
    `,
})
export class IconHorizontalDotsComponent {
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
