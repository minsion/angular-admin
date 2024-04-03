import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-menu',
    template: `
        <ng-template #template>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <path d="M20 7L4 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path opacity="0.5" d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M20 17L4 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        </ng-template>
    `,
})
export class IconMenuComponent {
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
