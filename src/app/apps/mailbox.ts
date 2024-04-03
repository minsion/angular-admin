import { Component, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    templateUrl: './mailbox.html',
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
        ]),
    ],
})
export class MailboxComponent {
    constructor(public fb: FormBuilder, public sanitizer: DomSanitizer) {}
    defaultData = {
        id: null,
        from: 'vristo@mail.com',
        to: '',
        cc: '',
        title: '',
        file: null,
        description: '',
        displayDescription: '',
    };
    isShowMailMenu = false;
    isEdit = false;
    selectedTab = 'inbox';
    filteredMailList: any = [];
    checkedAll: any = null;
    searchText = '';
    selectedMail: any = null;
    params!: FormGroup;
    mailList = [
        {
            id: 1,
            selected: false,
            path: 'profile-15.jpeg',
            firstName: 'Laurie',
            lastName: 'Fox',
            email: 'laurieFox@mail.com',
            date: new Date(),
            time: '2:00 PM',
            title: 'Promotion Page',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'inbox',
            isImportant: false,
            isStar: true,
            group: 'social',
            isUnread: false,
            attachments: [
                {
                    name: 'Confirm File.txt',
                    size: '450KB',
                    type: 'file',
                },
                {
                    name: 'Important Docs.xml',
                    size: '2.1MB',
                    type: 'file',
                },
            ],
            description: `
                        <p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <div class="gallery text-center">
                            <img alt="image-gallery" src="${'/assets/images/carousel3.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;" />
                            <img alt="image-gallery" src="${'/assets/images/carousel2.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;" />
                            <img alt="image-gallery" src="${'/assets/images/carousel1.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;" />
                        </div>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 2,
            selected: false,
            path: 'profile-14.jpeg',
            firstName: 'Andy',
            lastName: 'King',
            email: 'kingAndy@mail.com',
            date: new Date(),
            time: '6:28 PM',
            title: 'Hosting Payment Reminder',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: '',
            isUnread: false,
            description: `
                        <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 3,
            selected: false,
            path: '',
            firstName: 'Kristen',
            lastName: 'Beck',
            email: 'kirsten.beck@mail.com',
            date: new Date(),
            time: '11:09 AM',
            title: 'Verification Link',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: 'social',
            isUnread: true,
            description: `
                        <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 4,
            selected: false,
            path: 'profile-16.jpeg',
            firstName: 'Christian',
            lastName: '',
            email: 'christian@mail.com',
            date: '11/30/2021',
            time: '2:00 PM',
            title: 'New Updates',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: 'private',
            isUnread: false,
            attachments: [
                {
                    name: 'update.zip',
                    size: '1.38MB',
                    type: 'zip',
                },
            ],
            description: `
                        <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 5,
            selected: false,
            path: 'profile-17.jpeg',
            firstName: 'Roxanne',
            lastName: '',
            email: 'roxanne@mail.com',
            date: '11/15/2021',
            time: '2:00 PM',
            title: 'Schedular Alert',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: 'personal',
            isUnread: true,
            description: `
                        <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 6,
            selected: false,
            path: 'profile-18.jpeg',
            firstName: 'Nia',
            lastName: 'Hillyer',
            email: 'niahillyer@mail.com',
            date: '08/16/2020',
            time: '2:22 AM',
            title: 'Motion UI Kit',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'inbox',
            isImportant: true,

            isStar: true,
            group: '',
            isUnread: false,
            description: `
                        <p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                        <div class="gallery text-center">
                            <img alt="image-gallery" src="${'/assets/images/carousel3.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;">
                            <img alt="image-gallery" src="${'/assets/images/carousel2.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;">
                            <img alt="image-gallery" src="${'/assets/images/carousel1.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;">
                        </div>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 7,
            selected: false,
            path: 'profile-19.jpeg',
            firstName: 'Iris',
            lastName: 'Hubbard',
            email: 'irishubbard@mail.com',
            date: '08/16/2020',
            time: '1:40 PM',
            title: 'Green Illustration',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'inbox',
            isImportant: true,

            isStar: true,
            group: '',
            isUnread: false,
            description: `
                        <p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 8,
            selected: false,
            path: '',
            firstName: 'Ernest',
            lastName: 'Reeves',
            email: 'reevesErnest@mail.com',
            date: '06/02/2020',
            time: '8:25 PM',
            title: 'Youtube',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'archive',
            isImportant: true,

            isStar: true,
            group: 'work',
            isUnread: false,
            description: `
                        <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 9,
            selected: false,
            path: 'profile-20.jpeg',
            firstName: 'Info',
            lastName: 'Company',
            email: 'infocompany@mail.com',
            date: '02/10/2020',
            time: '7:00 PM',
            title: '50% Discount',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: 'work',
            isUnread: false,
            description: `
                        <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },

        {
            id: 10,
            selected: false,
            path: '',
            firstName: 'NPM',
            lastName: 'Inc',
            email: 'npminc@mail.com',
            date: '12/15/2018',
            time: '8:37 AM',
            title: 'npm Inc',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'archive',
            isImportant: false,
            isStar: false,
            group: 'personal',
            isUnread: true,
            attachments: [
                {
                    name: 'package.zip',
                    size: '450KB',
                    type: 'zip',
                },
            ],
            description: `
                        <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 11,
            selected: false,
            path: 'profile-21.jpeg',
            firstName: 'Marlene',
            lastName: 'Wood',
            email: 'marlenewood@mail.com',
            date: '11/25/2018',
            time: '1:51 PM',
            title: 'eBill',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: 'personal',
            isUnread: false,
            description: `
                        <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },

        {
            id: 12,
            selected: false,
            path: '',
            firstName: 'Keith',
            lastName: 'Foster',
            email: 'kf@mail.com',
            date: '12/15/2018',
            time: '9:30 PM',
            title: 'Web Design News',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'draft',
            isImportant: false,
            isStar: false,
            group: 'personal',
            isUnread: false,
            description: `
                        <p class="mail-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>
                        `,
        },
        {
            id: 13,
            selected: false,
            path: '',
            firstName: 'Amy',
            lastName: 'Diaz',
            email: 'amyDiaz@mail.com',
            date: '12/15/2018',
            time: '2:00 PM',
            title: 'Ecommerce Analytics',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'draft',
            isImportant: false,
            isStar: false,
            group: 'private',
            isUnread: false,
            description: `
                        <p class="mail-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>
                        `,
        },

        {
            id: 14,
            selected: false,
            path: '',
            firstName: 'Alan',
            lastName: '',
            email: 'alan@mail.com',
            date: '12/16/2019',
            time: '8:45 AM',
            title: 'Mozilla Update',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'sent_mail',
            isImportant: false,
            isStar: false,
            group: 'work',
            isUnread: false,
            attachments: [
                {
                    name: 'Confirm File',
                    size: '450KB',
                    type: 'file',
                },
                {
                    name: 'Important Docs',
                    size: '2.1MB',
                    type: 'folder',
                },
                {
                    name: 'Photo.png',
                    size: '50kb',
                    type: 'image',
                },
            ],
            description: `
                        <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 15,
            selected: false,
            path: '',
            firstName: 'Justin',
            lastName: 'Cross',
            email: 'justincross@mail.com',
            date: '09/14/219',
            time: '3:10 PM',
            title: 'App Project Checklist',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'sent_mail',
            isImportant: false,
            isStar: false,
            group: '',
            isUnread: false,
            attachments: [
                {
                    name: 'Important Docs',
                    size: '2.1MB',
                    type: 'folder',
                },
                {
                    name: 'Photo.png',
                    size: '50kb',
                    type: 'image',
                },
            ],
            description: `
                        <p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },

        {
            id: 16,
            selected: false,
            path: 'profile-21.jpeg',
            firstName: 'Alex',
            lastName: 'Gray',
            email: 'alexGray@mail.com',
            date: '08/16/2019',
            time: '10:18 AM',
            title: 'Weekly Newsletter',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'spam',
            isImportant: false,
            isStar: false,
            group: '',
            isUnread: false,
            attachments: [
                {
                    name: 'Confirm File',
                    size: '450KB',
                    type: 'file',
                },
                {
                    name: 'Important Docs',
                    size: '2.1MB',
                    type: 'folder',
                },
                {
                    name: 'Photo.png',
                    size: '50kb',
                    type: 'image',
                },
            ],
            description: `
                        <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 17,
            selected: false,
            path: 'profile-22.jpeg',
            firstName: 'Info',
            lastName: 'Company',
            email: 'infocompany@mail.com',
            date: '02/10/2018',
            time: '7:00 PM',
            title: '50% Discount',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'spam',
            isImportant: false,
            isStar: false,
            group: 'work',
            isUnread: false,
            description: `
                        <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 18,
            selected: false,
            path: 'profile-21.jpeg',
            firstName: 'Marlene',
            lastName: 'Wood',
            email: 'marlenewood@mail.com',
            date: '11/25/2017',
            time: '1:51 PM',
            title: 'eBill',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'spam',
            isImportant: false,
            isStar: false,
            group: 'personal',
            isUnread: false,
            description: `
                        <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },

        {
            id: 19,
            selected: false,
            path: 'profile-23.jpeg',
            firstName: 'Ryan MC',
            lastName: 'Killop',
            email: 'ryanMCkillop@mail.com',
            date: '08/17/2018',
            time: '11:45 PM',
            title: 'Make it Simple',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'trash',
            isImportant: false,
            isStar: false,
            group: '',
            isUnread: false,
            description: `
                        <p class="mail-content"> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <div class="gallery text-center">
                            <img alt="image-gallery" src="${'/assets/images/carousel2.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;">
                            <img alt="image-gallery" src="${'/assets/images/carousel3.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;">
                            <img alt="image-gallery" src="${'/assets/images/carousel1.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;">
                        </div>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 20,
            selected: false,
            path: 'profile-23.jpeg',
            firstName: 'Liam',
            lastName: 'Sheldon',
            email: 'liamsheldon@mail.com',
            date: '08/17/2018 ',
            time: '11:45 PM',
            title: 'New Offers',
            displayDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
            type: 'trash',
            isImportant: false,
            isStar: false,
            group: '',
            isUnread: false,
            attachments: [
                {
                    name: 'Confirm File',
                    size: '450KB',
                    type: 'file',
                },
            ],
            description: `
                        <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        `,
        },
        {
            id: 21,
            selected: false,
            path: 'profile-21.jpeg',
            firstName: 'Porter',
            lastName: 'Taylor',
            email: 'porter.harber@wiza.info',
            date: '06/01/2020',
            time: '02:40 PM',
            title: 'Id labore ex et quam laborum',
            displayDescription:
                'Laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: '',
            isUnread: false,
            description: `<p class="mail-content">Laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 22,
            selected: false,
            path: 'profile-22.jpeg',
            firstName: 'Brock',
            lastName: 'Mills',
            email: 'brock.gibson@farrell.biz',
            date: '09/08/2020',
            time: '04:20 AM',
            title: 'Quo vero reiciendis velit similique earum',
            displayDescription:
                'Est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: '',
            isUnread: false,
            description: `<p class="mail-content">Est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 23,
            selected: false,
            path: 'profile-3.jpeg',
            firstName: 'Nyost',
            lastName: 'Terry',
            email: 'nyost@yahoo.com',
            date: '04/01/2019',
            time: '02:10 AM',
            title: 'Odio adipisci rerum aut animi',
            displayDescription:
                'Quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
            type: 'inbox',
            isImportant: true,
            isStar: false,
            group: 'personal',
            isUnread: false,
            description: `<p class="mail-content">Quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 24,
            selected: false,
            path: 'profile-2.jpeg',
            firstName: 'Leonardo',
            lastName: 'Knox',
            email: 'leonardo61@yahoo.com',
            date: '08/08/2018',
            time: '07:50 PM',
            title: 'Alias odio sit',
            displayDescription:
                'Non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
            type: 'inbox',
            isImportant: false,
            isStar: true,
            group: '',
            isUnread: false,
            description: `<p class="mail-content">Non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 25,
            selected: false,
            path: 'profile-24.jpeg',
            firstName: 'Melisa',
            lastName: 'Mitchell',
            email: 'melisa.legros@mayer.com',
            date: '10/03/2018',
            time: '06:40 AM',
            title: 'Vero eaque aliquid doloribus et culpa',
            displayDescription:
                'Harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
            type: 'inbox',
            isImportant: true,
            isStar: true,
            group: 'work',
            isUnread: false,
            description: `<p class="mail-content">Harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 26,
            selected: false,
            path: 'profile-26.jpeg',
            firstName: 'Florida',
            lastName: 'Morgan',
            email: 'florida54@gmail.com',
            date: '05/12/2019',
            time: '09:20 PM',
            title: 'Et fugit eligendi deleniti quidem qui sint nihil autem',
            displayDescription:
                'Doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: '',
            isUnread: false,
            description: `<p class="mail-content">Doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 27,
            selected: false,
            path: 'profile-27.jpeg',
            firstName: 'Madison',
            lastName: 'King',
            email: 'madison86@yahoo.com',
            date: '12/04/2018',
            time: '10:40 PM',
            title: 'Repellat consequatur praesentium vel minus molestias voluptatum',
            displayDescription:
                'Maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: 'private',
            isUnread: false,
            description: `<p class="mail-content">Maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 28,
            selected: false,
            path: 'profile-30.jpeg',
            firstName: 'Paul',
            lastName: 'Lambert',
            email: 'paul.cruickshank@yahoo.com',
            date: '06/05/2018',
            time: '01:40 AM',
            title: 'Et omnis dolorem',
            displayDescription:
                'Ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque',
            type: 'inbox',
            isImportant: true,
            isStar: false,
            group: '',
            isUnread: false,
            description: `<p class="mail-content">Ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 29,
            selected: false,
            path: 'profile-31.jpeg',
            firstName: 'Brakus',
            lastName: 'Morrison',
            email: 'brakus.heidi@gmail.com',
            date: '03/09/2018',
            time: '06:10 PM',
            title: 'Provident id voluptas',
            displayDescription:
                'Sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus',
            type: 'inbox',
            isImportant: false,
            isStar: true,
            group: 'social',
            isUnread: false,
            description: `<p class="mail-content">Sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 30,
            selected: false,
            path: 'profile-32.jpeg',
            firstName: 'Predovic',
            lastName: 'Peake',
            email: 'predovic.arianna@kirlin.com',
            date: '05/06/2018',
            time: '09:00 AM',
            title: 'Eaque et deleniti atque tenetur ut quo ut',
            displayDescription:
                'Voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facili',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: 'personal',
            isUnread: false,
            description: `<p class="mail-content">Voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facili</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 31,
            selected: false,
            path: 'profile-32.jpeg',
            firstName: 'shaylee',
            lastName: 'Buford',
            email: 'Buford@shaylee.biz',
            date: '07/03/2018',
            time: '08:15 AM',
            title: 'Ex velit ut cum eius odio ad placeat',
            displayDescription:
                'Quia incidunt ut\naliquid est ut rerum deleniti iure est\nipsum quia ea sint et\nvoluptatem quaerat eaque repudiandae eveniet aut',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: '',
            isUnread: false,
            description: `<p class="mail-content"></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 32,
            selected: false,
            path: 'profile-32.jpeg',
            firstName: 'Maria',
            lastName: 'laurel',
            email: 'Maria@laurel.name',
            date: '08/03/2018',
            time: '09:30 AM',
            title: 'Dolorem architecto ut pariatur quae qui suscipit',
            displayDescription:
                'Nihil ea itaque libero illo\nofficiis quo quo dicta inventore consequatur voluptas voluptatem\ncorporis sed necessitatibus velit tempore\nrerum velit et temporibus',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: '',
            isUnread: false,
            description: `<p class="mail-content"></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 33,
            selected: false,
            path: 'profile-32.jpeg',
            firstName: 'Jaeden',
            lastName: 'Towne',
            email: 'Jaeden.Towne@arlene.tv',
            date: '11/07/2018',
            time: '10:15 AM',
            title: 'Voluptatum totam vel voluptate omnis',
            displayDescription: 'Fugit harum quae vero\nlibero unde tempore\nsoluta eaque culpa sequi quibusdam nulla id\net et necessitatibus',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: '',
            isUnread: false,
            description: `<p class="mail-content"></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 34,
            selected: false,
            path: 'profile-32.jpeg',
            firstName: 'Schneider',
            lastName: 'Ethelyn',
            email: 'Ethelyn.Schneider@emelia.co.uk',
            date: '07/11/2018',
            time: '10:30 AM',
            title: 'Omnis nemo sunt ab autem',
            displayDescription: 'Omnis temporibus quasi ab omnis\nfacilis et omnis illum quae quasi aut\nminus iure ex rem ut reprehenderit\nin non fugit',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: '',
            isUnread: false,
            description: `<p class="mail-content"></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
        {
            id: 35,
            selected: false,
            path: 'profile-32.jpeg',
            firstName: 'Anna',
            lastName: 'Georgi',
            email: 'Georgianna@florence.io',
            date: '10/10/2017',
            time: '10:45 AM',
            title: 'Repellendus sapiente omnis praesentium aliquam ipsum id molestiae omnis',
            displayDescription: 'Dolor mollitia quidem facere et\nvel est ut\nut repudiandae est quidem dolorem sed atque\nrem quia aut adipisci sunt',
            type: 'inbox',
            isImportant: false,
            isStar: false,
            group: '',
            isUnread: false,
            description: `<p class="mail-content"></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
        },
    ];
    pager = {
        currentPage: 1,
        totalPages: 0,
        pageSize: 10,
        startIndex: 0,
        endIndex: 0,
    };
    pagedMails: any = [];
    editorOptions = {
        toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline', 'link'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']],
    };
    isShowDropdown = false;

    initForm() {
        this.params = this.fb.group({
            id: [null],
            selected: false,
            from: ['vristo@mail.com'],
            to: ['', Validators.required],
            cc: [''],
            title: ['', Validators.required],
            file: [[]],
            description: [''],
            displayDescription: [''],
        });
    }

    checkAllCheckbox() {
        setTimeout(() => {
            const cnt = this.filteredMailList.filter((d: any) => d.selected);
            this.checkedAll = cnt.length && cnt.length === this.filteredMailList.length;
        });
    }
    showTime(item: any) {
        const displayDt: any = new Date(item.date);
        const cDt: any = new Date();
        if (displayDt.toDateString() === cDt.toDateString()) {
            return item.time;
        } else {
            if (displayDt.getFullYear() === cDt.getFullYear()) {
                var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                return monthNames[displayDt.getMonth()] + ' ' + String(displayDt.getDate()).padStart(2, '0');
            } else {
                return String(displayDt.getMonth() + 1).padStart(2, '0') + '/' + String(displayDt.getDate()).padStart(2, '0') + '/' + displayDt.getFullYear();
            }
        }
    }

    checkAll(isChecked: boolean) {
        this.filteredMailList.map((d: any) => (d.selected = isChecked));
        this.checkAllCheckbox();
    }

    ngOnInit() {
        this.initForm();
        this.searchMails();
    }

    quillEditorReady(event: any) {
        this.params.patchValue({ displayDescription: event.text });
    }

    searchMails(isResetPage = true) {
        this.clearSelection();
        if (isResetPage) {
            this.pager.currentPage = 1;
        }

        let res;
        if (this.selectedTab === 'important') {
            res = this.mailList.filter((d) => d.isImportant);
        } else if (this.selectedTab === 'star') {
            res = this.mailList.filter((d) => d.isStar);
        } else if (this.selectedTab === 'personal' || this.selectedTab === 'work' || this.selectedTab === 'social' || this.selectedTab === 'private') {
            res = this.mailList.filter((d) => d.group === this.selectedTab);
        } else {
            res = this.mailList.filter((d) => d.type === this.selectedTab);
        }
        this.filteredMailList = res.filter(
            (d) =>
                (d.title && d.title.toLowerCase().includes(this.searchText)) ||
                (d.firstName && d.firstName.toLowerCase().includes(this.searchText)) ||
                (d.lastName && d.lastName.toLowerCase().includes(this.searchText)) ||
                (d.displayDescription && d.displayDescription.toLowerCase().includes(this.searchText))
        );
        if (this.filteredMailList.length) {
            this.pager.totalPages = this.pager.pageSize < 1 ? 1 : Math.ceil(this.filteredMailList.length / this.pager.pageSize);
            if (this.pager.currentPage > this.pager.totalPages) {
                this.pager.currentPage = 1;
            }
            this.pager.startIndex = (this.pager.currentPage - 1) * this.pager.pageSize;
            this.pager.endIndex = Math.min(this.pager.startIndex + this.pager.pageSize - 1, this.filteredMailList.length - 1);
            this.pagedMails = this.filteredMailList.slice(this.pager.startIndex, this.pager.endIndex + 1);
        } else {
            this.pagedMails = [];
            this.pager.startIndex = -1;
            this.pager.endIndex = -1;
        }
    }

    clearSelection() {
        this.checkAll(false);
        this.checkedAll = false;
    }

    tabChanged(tabType: any) {
        this.isEdit = false;
        this.selectedTab = tabType;
        this.isShowMailMenu = false;
        this.selectedMail = null;
        this.searchMails();
        if (tabType !== 'archive' && tabType !== 'important') {
            this.isShowDropdown = false;
        }
    }

    setImportant(mailId: number) {
        if (mailId) {
            let item = this.filteredMailList.find((d: any) => d.id === mailId);
            item.isImportant = !item.isImportant;
            setTimeout(() => {
                this.searchMails(false);
            });
        }
    }

    setStar(mailId: number) {
        if (mailId) {
            let item = this.filteredMailList.find((d: any) => d.id === mailId);
            item.isStar = !item.isStar;
            setTimeout(() => {
                this.searchMails(false);
            });
        }
    }

    refreshMails() {
        this.searchText = '';
        this.searchMails(false);
    }

    getSelectedRows() {
        return this.filteredMailList.filter((d: any) => d.selected).map((t: any) => t.id);
    }

    setSpam() {
        if (this.getSelectedRows().length) {
            let items = this.filteredMailList.filter((d: any) => this.getSelectedRows().includes(d.id));
            for (let item of items) {
                item.type = item.type === 'spam' ? 'inbox' : 'spam';
            }

            if (this.selectedTab == 'spam') {
                this.showMessage(this.getSelectedRows().length + ' Mail has been removed from Spam.');
            } else {
                this.showMessage(this.getSelectedRows().length + ' Mail has been added to Spam.');
            }
            this.searchMails(false);
        }
    }

    setArchive() {
        if (this.getSelectedRows().length) {
            let items = this.filteredMailList.filter((d: any) => this.getSelectedRows().includes(d.id));
            for (let item of items) {
                item.type = item.type === 'archive' ? 'inbox' : 'archive';
            }
            if (this.selectedTab == 'archive') {
                this.showMessage(this.getSelectedRows().length + ' Mail has been removed from Archive.');
            } else {
                this.showMessage(this.getSelectedRows().length + ' Mail has been added to Archive.');
            }
            this.searchMails(false);
        }
    }

    setGroup(group: any) {
        if (this.getSelectedRows().length) {
            let items = this.filteredMailList.filter((d: any) => this.getSelectedRows().includes(d.id));
            for (let item of items) {
                item.group = group;
            }

            this.showMessage(this.getSelectedRows().length + ' Mail has been grouped as ' + group.toUpperCase());
            this.clearSelection();
            setTimeout(() => {
                this.searchMails(false);
            });
        }
    }

    setAction(type: any) {
        if (this.getSelectedRows().length) {
            const totalSelected = this.getSelectedRows().length;
            let items = this.filteredMailList.filter((d: any) => this.getSelectedRows().includes(d.id));
            for (let item of items) {
                if (type === 'trash') {
                    item.type = 'trash';
                    item.group = '';
                    item.isStar = false;
                    item.isImportant = false;
                    this.showMessage(totalSelected + ' Mail has been deleted.');
                    this.searchMails(false);
                } else if (type === 'read') {
                    item.isUnread = false;
                    this.showMessage(totalSelected + ' Mail has been marked as Read.');
                } else if (type === 'unread') {
                    item.isUnread = true;
                    this.showMessage(totalSelected + ' Mail has been marked as UnRead.');
                } else if (type === 'important') {
                    item.isImportant = true;
                    this.showMessage(totalSelected + ' Mail has been marked as Important.');
                } else if (type === 'unimportant') {
                    item.isImportant = false;
                    this.showMessage(totalSelected + ' Mail has been marked as UnImportant.');
                } else if (type === 'star') {
                    item.isStar = true;
                    this.showMessage(totalSelected + ' Mail has been marked as Star.');
                }
                //restore & permanent delete
                else if (type === 'restore') {
                    item.type = 'inbox';
                    this.showMessage(totalSelected + ' Mail Restored.');
                    this.searchMails(false);
                } else if (type === 'delete') {
                    this.mailList = this.mailList.filter((d: any) => d.id != item.id);
                    this.showMessage(totalSelected + ' Mail Permanently Deleted.');
                    this.searchMails(false);
                }
            }
            this.clearSelection();
        }
    }

    saveMail(type: any, id: any) {
        if (!this.params.value.to) {
            this.showMessage('To email address is required.', 'error');
            return;
        }
        if (!this.params.value.title) {
            this.showMessage('Title of email is required.', 'error');
            return;
        }

        let maxId = 0;
        if (!this.params.value.id) {
            maxId = this.mailList.length ? this.mailList.reduce((max, character) => (character.id > max ? character.id : max), this.mailList[0].id) : 0;
        }
        let cDt = new Date();

        let obj: any = {
            id: maxId + 1,
            selected: false,
            path: '',
            firstName: '',
            lastName: '',
            email: this.params.value.to,
            date: cDt.getMonth() + 1 + '/' + cDt.getDate() + '/' + cDt.getFullYear(),
            time: cDt.toLocaleTimeString(),
            title: this.params.value.title,
            displayDescription: this.params.value.displayDescription,
            type: 'draft',
            isImportant: false,
            group: '',
            isUnread: false,
            description: this.params.value.description,
            attachments: null,
        };

        if (type === 'save' || type === 'save_reply' || type === 'save_forward') {
            //saved to draft
            obj.type = 'draft';
            this.mailList.splice(0, 0, obj);
            this.searchMails();

            this.showMessage('Mail has been saved successfully to draft.');
        } else if (type === 'send' || type === 'reply' || type === 'forward') {
            //saved to sent mail

            obj.type = 'sent_mail';
            this.mailList.splice(0, 0, obj);
            this.searchMails();

            this.showMessage('Mail has been sent successfully.');
        }

        this.selectedMail = null;
        this.isEdit = false;
    }

    getFileSize(file_type: any) {
        let type = 'file';
        if (file_type.includes('image/')) {
            type = 'image';
        } else if (file_type.includes('application/x-zip')) {
            type = 'zip';
        }
        return type;
    }

    getFileType(total_bytes: number) {
        let size = '';
        if (total_bytes < 1000000) {
            size = Math.floor(total_bytes / 1000) + 'KB';
        } else {
            size = Math.floor(total_bytes / 1000000) + 'MB';
        }
        return size;
    }

    selectMail(item: any) {
        if (item) {
            if (item.type != 'draft') {
                if (item && item.isUnread) {
                    item.isUnread = false;
                }
                this.selectedMail = item;
            } else {
                this.openMail('draft', item);
            }
        } else {
            this.selectedMail = '';
        }
    }

    openMail(type: string, item: any) {
        if (type === 'add') {
            this.isShowMailMenu = false;
            this.params.patchValue({
                ...this.defaultData,
            });
        } else if (type === 'draft') {
            let data = JSON.parse(JSON.stringify(item));
            this.params.patchValue({
                ...data,
                from: this.defaultData.from,
                to: data.email,
                displayDescription: data.email,
            });
        } else if (type === 'reply') {
            let data = JSON.parse(JSON.stringify(item));
            this.params.patchValue({
                ...data,
                from: this.defaultData.from,
                to: data.email,
                title: 'Re: ' + data.title,
                displayDescription: 'Re: ' + data.title,
            });
        } else if (type === 'forward') {
            let data = JSON.parse(JSON.stringify(item));
            this.params.patchValue({
                ...data,
                from: this.defaultData.from,
                to: data.email,
                title: 'Fwd: ' + data.title,
                displayDescription: 'Fwd: ' + data.title,
            });
        }

        this.isEdit = true;
    }

    closeMsgPopUp() {
        this.isEdit = false;
        this.selectedTab = 'inbox';
        this.searchMails();
    }

    getMailsLength(type: string) {
        return this.mailList.filter((d) => !d.type || d.type === type).length;
    }

    showMessage(msg = '', type = 'success') {
        const toast: any = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    }
}
