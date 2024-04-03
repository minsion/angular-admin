import { Component } from '@angular/core';
import { slideDownUp } from '../shared/animations';

@Component({
    moduleId: module.id,
    templateUrl: './knowledge-base.html',
    animations: [slideDownUp],
})
export class KnowledgeBaseComponent {
    constructor() {}
    activeTab: any = 'general';
    active1: any = 1;
    active2: any = 1;
    modal = false;
    items = [
        {
            src: '/assets/images/knowledge/image-5.jpg',
            title: 'Excessive sugar is harmful',
        },
        {
            src: '/assets/images/knowledge/image-6.jpg',
            title: 'Creative Photography',
        },
        {
            src: '/assets/images/knowledge/image-7.jpg',
            title: 'Plan your next trip',
        },
        {
            src: '/assets/images/knowledge/image-8.jpg',
            title: 'My latest Vlog',
        },
    ];
}
