import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-wheel',
    template: `
        <ng-template #template>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5" />
                <path opacity="0.5" d="M15 9L19 5" stroke="currentColor" stroke-width="1.5" />
                <path opacity="0.5" d="M5 19L9 15" stroke="currentColor" stroke-width="1.5" />
                <path opacity="0.5" d="M9 9L5 5" stroke="currentColor" stroke-width="1.5" />
                <path opacity="0.5" d="M19 19L15 15" stroke="currentColor" stroke-width="1.5" />
            </svg>
        </ng-template>
    `,
})
export class IconWheelComponent {
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
