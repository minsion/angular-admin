import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-microphone-off',
    template: `
        <ng-template #template>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <path
                    d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V8Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
                <path opacity="0.5" d="M13.5 8L17 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path opacity="0.5" d="M13.5 11L17 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path opacity="0.5" d="M7 8L9 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path opacity="0.5" d="M7 11L9 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path
                    opacity="0.5"
                    d="M20 10V11C20 15.4183 16.4183 19 12 19M4 10V11C4 15.4183 7.58172 19 12 19M12 19V22"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
                <path d="M22 2L2 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        </ng-template>
    `,
})
export class IconMicrophoneOffComponent {
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
