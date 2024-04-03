import { Component, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ModalComponent } from 'angular-custom-modal';
import { NgScrollbar } from 'ngx-scrollbar';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    templateUrl: './chat.html',
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
        ]),
    ],
})
export class ChatComponent {
    constructor(public storeData: Store<any>) {
        this.initStore();
    }
    store: any;
    async initStore() {
        this.storeData
            .select((d) => d.index)
            .subscribe((d) => {
                this.store = d;
            });
    }
    @ViewChild('isAddNoteModal') isAddNoteModal!: ModalComponent;
    @ViewChild('isDeleteNoteModal') isDeleteNoteModal!: ModalComponent;
    @ViewChild('isViewNoteModal') isViewNoteModal!: ModalComponent;
    @ViewChild('scrollable') scrollable!: NgScrollbar;
    isShowUserChat = false;
    isShowChatMenu = false;
    loginUser = {
        id: 0,
        name: 'Alon Smith',
        path: 'profile-34.jpeg',
        designation: 'Software Developer',
    };
    contactList = [
        {
            userId: 1,
            name: 'Nia Hillyer',
            path: 'profile-16.jpeg',
            time: '2:09 PM',
            preview: 'How do you do?',
            messages: [
                {
                    fromUserId: 0,
                    toUserId: 1,
                    text: 'Hi, I am back from vacation',
                    time: '',
                },
                {
                    fromUserId: 0,
                    toUserId: 1,
                    text: 'How are you?',
                    time: '',
                },
                {
                    fromUserId: 1,
                    toUserId: 0,
                    text: 'Welcom Back',
                    time: '',
                },
                {
                    fromUserId: 1,
                    toUserId: 0,
                    text: 'I am all well',
                    time: '',
                },
                {
                    fromUserId: 0,
                    toUserId: 1,
                    text: 'Coffee?',
                    time: '',
                },
            ],
            active: true,
        },
        {
            userId: 2,
            name: 'Sean Freeman',
            path: 'profile-1.jpeg',
            time: '12:09 PM',
            preview: 'I was wondering...',
            messages: [
                {
                    fromUserId: 0,
                    toUserId: 2,
                    text: 'Hello',
                    time: '',
                },
                {
                    fromUserId: 0,
                    toUserId: 2,
                    text: "It's me",
                    time: '',
                },
                {
                    fromUserId: 0,
                    toUserId: 2,
                    text: 'I have a question regarding project.',
                    time: '',
                },
            ],
            active: false,
        },
        {
            userId: 3,
            name: 'Alma Clarke',
            path: 'profile-2.jpeg',
            time: '1:44 PM',
            preview: 'I’ve forgotten how it felt before',
            messages: [
                {
                    fromUserId: 0,
                    toUserId: 3,
                    text: 'Hey Buddy.',
                    time: '',
                },
                {
                    fromUserId: 0,
                    toUserId: 3,
                    text: "What's up",
                    time: '',
                },
                {
                    fromUserId: 3,
                    toUserId: 0,
                    text: 'I am sick',
                    time: '',
                },
                {
                    fromUserId: 0,
                    toUserId: 3,
                    text: 'Not comming to office today.',
                    time: '',
                },
            ],
            active: true,
        },
        {
            userId: 4,
            name: 'Alan Green',
            path: 'profile-3.jpeg',
            time: '2:06 PM',
            preview: 'But we’re probably gonna need a new carpet.',
            messages: [
                {
                    fromUserId: 0,
                    toUserId: 4,
                    text: 'Hi, collect your check',
                    time: '',
                },
                {
                    fromUserId: 4,
                    toUserId: 0,
                    text: 'Ok, I will be there in 10 mins',
                    time: '',
                },
            ],
            active: true,
        },
        {
            userId: 5,
            name: 'Shaun Park',
            path: 'profile-4.jpeg',
            time: '2:05 PM',
            preview: 'It’s not that bad...',
            messages: [
                {
                    fromUserId: 0,
                    toUserId: 3,
                    text: 'Hi, I am back from vacation',
                    time: '',
                },
                {
                    fromUserId: 0,
                    toUserId: 3,
                    text: 'How are you?',
                    time: '',
                },
                {
                    fromUserId: 0,
                    toUserId: 5,
                    text: 'Welcom Back',
                    time: '',
                },
                {
                    fromUserId: 0,
                    toUserId: 5,
                    text: 'I am all well',
                    time: '',
                },
                {
                    fromUserId: 5,
                    toUserId: 0,
                    text: 'Coffee?',
                    time: '',
                },
            ],
            active: false,
        },
        {
            userId: 6,
            name: 'Roxanne',
            path: 'profile-5.jpeg',
            time: '2:00 PM',
            preview: 'Wasup for the third time like is you bling bitch',
            messages: [
                {
                    fromUserId: 0,
                    toUserId: 6,
                    text: 'Hi',
                    time: '',
                },
                {
                    fromUserId: 0,
                    toUserId: 6,
                    text: 'Uploaded files to server.',
                    time: '',
                },
            ],
            active: false,
        },
        {
            userId: 7,
            name: 'Ernest Reeves',
            path: 'profile-6.jpeg',
            time: '2:09 PM',
            preview: 'Wasup for the third time like is you bling bitch',
            messages: [],
            active: true,
        },
        {
            userId: 8,
            name: 'Laurie Fox',
            path: 'profile-7.jpeg',
            time: '12:09 PM',
            preview: 'Wasup for the third time like is you bling bitch',
            messages: [],
            active: true,
        },
        {
            userId: 9,
            name: 'Xavier',
            path: 'profile-8.jpeg',
            time: '4:09 PM',
            preview: 'Wasup for the third time like is you bling bitch',
            messages: [],
            active: false,
        },
        {
            userId: 10,
            name: 'Susan Phillips',
            path: 'profile-9.jpeg',
            time: '9:00 PM',
            preview: 'Wasup for the third time like is you bling bitch',
            messages: [],
            active: true,
        },
        {
            userId: 11,
            name: 'Dale Butler',
            path: 'profile-10.jpeg',
            time: '5:09 PM',
            preview: 'Wasup for the third time like is you bling bitch',
            messages: [],
            active: false,
        },
        {
            userId: 12,
            name: 'Grace Roberts',
            path: 'user-profile.jpeg',
            time: '8:01 PM',
            preview: 'Wasup for the third time like is you bling bitch',
            messages: [],
            active: true,
        },
    ];
    searchUser = '';
    textMessage = '';
    selectedUser: any = null;

    searchUsers() {
        return this.contactList.filter((d: { name: string }) => {
            return d.name.toLowerCase().includes(this.searchUser);
        });
    }

    selectUser(user: any) {
        this.selectedUser = user;
        this.isShowUserChat = true;
        this.scrollToBottom();
        this.isShowChatMenu = false;
    }

    sendMessage() {
        if (this.textMessage.trim()) {
            const user: any = this.contactList.find((d: { userId: any }) => d.userId === this.selectedUser.userId);
            user.messages.push({
                fromUserId: this.selectedUser.userId,
                toUserId: 0,
                text: this.textMessage,
                time: 'Just now',
            });
            this.textMessage = '';
            this.scrollToBottom();
        }
    }

    scrollToBottom() {
        if (this.isShowUserChat) {
            setTimeout(() => {
                this.scrollable.scrollTo({ bottom: 0 });
            });
        }
    }
}
