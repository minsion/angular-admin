import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-caret-down                                                                                           ',
    template: `
        <ng-template #template>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <path d="M19 9L12 15L5 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </ng-template>
    `,
})
export class IconCaretDownComponent {
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
