import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-minus',
    template: `
        <ng-template #template>
            <svg
                width="16"
                height="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                [ngClass]="class"
            >
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        </ng-template>
    `,
})
export class IconMinusComponent {
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
