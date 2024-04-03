import { Component, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { animate, style, transition, trigger } from '@angular/animations';
import { ModalComponent } from 'angular-custom-modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: './notes.html',
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
        ]),
    ],
})
export class NotesComponent {
    constructor(public fb: FormBuilder) {}
    defaultParams = {
        id: null,
        title: '',
        description: '',
        tag: '',
        user: '',
        thumb: '',
    };
    @ViewChild('isAddNoteModal') isAddNoteModal!: ModalComponent;
    @ViewChild('isDeleteNoteModal') isDeleteNoteModal!: ModalComponent;
    @ViewChild('isViewNoteModal') isViewNoteModal!: ModalComponent;
    params!: FormGroup;
    isShowNoteMenu = false;
    notesList = [
        {
            id: 1,
            user: 'Max Smith',
            thumb: 'profile-16.jpeg',
            title: 'Meeting with Kelly',
            description: 'Curabitur facilisis vel elit sed dapibus sodales purus rhoncus.',
            date: '11/01/2020',
            isFav: false,
            tag: 'personal',
        },
        {
            id: 2,
            user: 'John Doe',
            thumb: 'profile-14.jpeg',
            title: 'Receive Package',
            description: 'Facilisis curabitur facilisis vel elit sed dapibus sodales purus.',
            date: '11/02/2020',
            isFav: true,
            tag: '',
        },
        {
            id: 3,
            user: 'Kia Jain',
            thumb: 'profile-15.jpeg',
            title: 'Download Docs',
            description: 'Proin a dui malesuada, laoreet mi vel, imperdiet diam quam laoreet.',
            date: '11/04/2020',
            isFav: false,
            tag: 'work',
        },
        {
            id: 4,
            user: 'Max Smith',
            thumb: 'profile-16.jpeg',
            title: 'Meeting at 4:50pm',
            description: 'Excepteur sint occaecat cupidatat non proident, anim id est laborum.',
            date: '11/08/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 5,
            user: 'Karena Courtliff',
            thumb: 'profile-17.jpeg',
            title: 'Backup Files EOD',
            description: 'Maecenas condimentum neque mollis, egestas leo ut, gravida.',
            date: '11/09/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 6,
            user: 'Max Smith',
            thumb: 'profile-16.jpeg',
            title: 'Download Server Logs',
            description: 'Suspendisse efficitur diam quis gravida. Nunc molestie est eros.',
            date: '11/09/2020',
            isFav: false,
            tag: 'social',
        },
        {
            id: 7,
            user: 'Vladamir Koschek',
            thumb: '',
            title: 'Team meet at Starbucks',
            description: 'Etiam a odio eget enim aliquet laoreet lobortis sed ornare nibh.',
            date: '11/10/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 8,
            user: 'Max Smith',
            thumb: 'profile-16.jpeg',
            title: 'Create new users Profile',
            description: 'Duis aute irure in nulla pariatur. Etiam a odio eget enim aliquet.',
            date: '11/11/2020',
            isFav: false,
            tag: 'important',
        },
        {
            id: 9,
            user: 'Robert Garcia',
            thumb: 'profile-21.jpeg',
            title: 'Create a compost pile',
            description: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.',
            date: '11/12/2020',
            isFav: true,
            tag: '',
        },
        {
            id: 10,
            user: 'Marie Hamilton',
            thumb: 'profile-2.jpeg',
            title: 'Take a hike at a local park',
            description: 'De carne lumbering animata corpora quaeritis. Summus brains sit',
            date: '11/13/2020',
            isFav: true,
            tag: '',
        },
        {
            id: 11,
            user: 'Megan Meyers',
            thumb: 'profile-1.jpeg',
            title: 'Take a class at local community center that interests you',
            description: 'Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin.',
            date: '11/13/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 12,
            user: 'Angela Hull',
            thumb: 'profile-22.jpeg',
            title: 'Research a topic interested in',
            description: 'Lemon drops tootsie roll marshmallow halvah carrot cake.',
            date: '11/14/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 13,
            user: 'Karen Wolf',
            thumb: 'profile-23.jpeg',
            title: 'Plan a trip to another country',
            description: 'Space, the final frontier. These are the voyages of the Starship Enterprise.',
            date: '11/16/2020',
            isFav: true,
            tag: '',
        },
        {
            id: 14,
            user: 'Jasmine Barnes',
            thumb: 'profile-1.jpeg',
            title: 'Improve touch typing',
            description: 'Well, the way they make shows is, they make one show.',
            date: '11/16/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 15,
            user: 'Thomas Cox',
            thumb: 'profile-11.jpeg',
            title: 'Learn Express.js',
            description: 'Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '11/17/2020',
            isFav: false,
            tag: 'work',
        },
        {
            id: 16,
            user: 'Marcus Jones',
            thumb: 'profile-12.jpeg',
            title: 'Learn calligraphy',
            description: 'Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '11/17/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 17,
            user: 'Matthew Gray',
            thumb: 'profile-24.jpeg',
            title: 'Have a photo session with some friends',
            description: 'Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '11/18/2020',
            isFav: false,
            tag: 'important',
        },
        {
            id: 18,
            user: 'Chad Davis',
            thumb: 'profile-31.jpeg',
            title: 'Go to the gym',
            description: 'Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '11/18/2020',
            isFav: false,
            tag: '',
        },
        {
            id: 19,
            user: 'Linda Drake',
            thumb: 'profile-23.jpeg',
            title: 'Make own LEGO creation',
            description: 'Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '11/18/2020',
            isFav: false,
            tag: 'social',
        },
        {
            id: 20,
            user: 'Kathleen Flores',
            thumb: 'profile-34.jpeg',
            title: 'Take cat on a walk',
            description: 'Baseball ipsum dolor sit amet cellar rubber win hack tossed. ',
            date: '11/18/2020',
            isFav: false,
            tag: 'personal',
        },
    ];
    filterdNotesList: any = '';
    selectedTab: any = 'all';
    deletedNote: any = null;
    selectedNote: any = {
        id: null,
        title: '',
        description: '',
        tag: '',
        user: '',
        thumb: '',
    };

    ngOnInit() {
        this.searchNotes();
    }

    initForm() {
        this.params = this.fb.group({
            id: [0],
            title: ['', Validators.required],
            description: [''],
            tag: [''],
            user: [''],
            thumb: [''],
        });
    }

    searchNotes() {
        if (this.selectedTab != 'fav') {
            if (this.selectedTab != 'all' || this.selectedTab === 'delete') {
                this.filterdNotesList = this.notesList.filter((d: { tag: any }) => d.tag === this.selectedTab);
            } else {
                this.filterdNotesList = this.notesList;
            }
        } else {
            this.filterdNotesList = this.notesList.filter((d: { isFav: any }) => d.isFav);
        }
    }

    saveNote() {
        if (this.params.controls['title'].errors) {
            this.showMessage('Title is required.', 'error');
            return;
        }
        if (this.params.value.id) {
            //update task
            let note: any = this.notesList.find((d: { id: any }) => d.id === this.params.value.id);
            note.title = this.params.value.title;
            note.user = this.params.value.user;
            note.description = this.params.value.description;
            note.tag = this.params.value.tag;
        } else {
            //add note
            let maxNoteId = this.notesList.length
                ? this.notesList.reduce((max: number, character: { id: number }) => (character.id > max ? character.id : max), this.notesList[0].id)
                : 0;
            let dt = new Date();
            let note = {
                id: maxNoteId + 1,
                title: this.params.value.title,
                user: this.params.value.user,
                thumb: 'profile-21.jpeg',
                description: this.params.value.description,
                date: dt.getDate() + '/' + Number(dt.getMonth()) + 1 + '/' + dt.getFullYear(),
                isFav: false,
                tag: this.params.value.tag,
            };
            this.notesList.splice(0, 0, note);
            this.searchNotes();
        }

        this.showMessage('Note has been saved successfully.');
        this.isAddNoteModal.close();
        this.searchNotes();
    }

    tabChanged(type: string) {
        this.selectedTab = type;
        this.searchNotes();
        this.isShowNoteMenu = false;
    }

    setFav(note: any) {
        let item = this.filterdNotesList.find((d: { id: any }) => d.id === note.id);
        item.isFav = !item.isFav;
        this.searchNotes();
    }

    setTag(note: any, name: string = '') {
        let item = this.filterdNotesList.find((d: { id: any }) => d.id === note.id);
        item.tag = name;
        this.searchNotes();
    }

    deleteNoteConfirm(note: any) {
        setTimeout(() => {
            this.deletedNote = note;
            this.isDeleteNoteModal.open();
        });
    }

    viewNote(note: any) {
        setTimeout(() => {
            this.selectedNote = note;
            this.isViewNoteModal.open();
        });
    }

    editNote(note: any = null) {
        this.isShowNoteMenu = false;
        this.isAddNoteModal.open();
        this.initForm();
        if (note) {
            this.params.setValue({
                id: note.id,
                title: note.title,
                description: note.description,
                tag: note.tag,
                user: note.user,
                thumb: note.thumb,
            });
        }
    }

    deleteNote() {
        this.notesList = this.notesList.filter((d: { id: any }) => d.id != this.deletedNote.id);
        this.searchNotes();
        this.showMessage('Note has been deleted successfully.');
        this.isDeleteNoteModal.close();
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
