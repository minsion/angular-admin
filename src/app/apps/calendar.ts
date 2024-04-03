import { Component, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { animate, style, transition, trigger } from '@angular/animations';
import { ModalComponent } from 'angular-custom-modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    templateUrl: './calendar.html',
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
        ]),
    ],
})
export class CalendarComponent {
    store: any;
    isLoading = true;
    @ViewChild('isAddEventModal') isAddEventModal!: ModalComponent;
    @ViewChild('calendar') calendar!: FullCalendarComponent;
    defaultParams = {
        id: null,
        title: '',
        start: '',
        end: '',
        description: '',
        type: 'primary',
    };
    params!: FormGroup;
    minStartDate: any = '';
    minEndDate: any = '';

    events: any = [];
    calendarOptions: any;
    constructor(public fb: FormBuilder, public storeData: Store<any>) {
        this.initStore();
        this.isLoading = false;
    }
    async initStore() {
        this.storeData
            .select((d: any) => d.index)
            .subscribe((d: any) => {
                const hasChangeLayout = this.store?.layout !== d?.layout;
                const hasChangeMenu = this.store?.menu !== d?.menu;
                const hasChangeSidebar = this.store?.sidebar !== d?.sidebar;

                this.store = d;

                if (hasChangeLayout || hasChangeMenu || hasChangeSidebar) {
                    if (this.isLoading) {
                        this.initCalendar();
                        this.calendarOptions.events = [];
                    } else {
                        setTimeout(() => {
                            this.initCalendar();
                        }, 300);
                    }
                }
            });
    }

    initCalendar() {
        this.calendarOptions = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
            },
            editable: true,
            dayMaxEvents: true,
            selectable: true,
            droppable: true,
            eventClick: (event: any) => {
                this.editEvent(event);
            },
            select: (event: any) => {
                this.editDate(event);
            },
        };
    }

    ngOnInit() {
        this.getEvents();
    }

    initForm() {
        this.params = this.fb.group({
            id: null,
            title: ['', Validators.required],
            start: ['', Validators.required],
            end: ['', Validators.required],
            description: [''],
            type: ['primary'],
        });
    }

    getEvents() {
        const now = new Date();
        this.events = [
            {
                id: 1,
                title: 'All Day Event',
                start: now.getFullYear() + '-' + this.getMonth(now) + '-01T14:30:00',
                end: now.getFullYear() + '-' + this.getMonth(now) + '-02T14:30:00',
                className: 'danger',
                description: 'Aenean fermentum quam vel sapien rutrum cursus. Vestibulum imperdiet finibus odio, nec tincidunt felis facilisis eu.',
            },
            {
                id: 2,
                title: 'Site Visit',
                start: now.getFullYear() + '-' + this.getMonth(now) + '-07T19:30:00',
                end: now.getFullYear() + '-' + this.getMonth(now) + '-08T14:30:00',
                className: 'primary',
                description: 'Etiam a odio eget enim aliquet laoreet. Vivamus auctor nunc ultrices varius lobortis.',
            },
            {
                id: 3,
                title: 'Product Lunching Event',
                start: now.getFullYear() + '-' + this.getMonth(now) + '-17T14:30:00',
                end: now.getFullYear() + '-' + this.getMonth(now) + '-18T14:30:00',
                className: 'info',
                description: 'Proin et consectetur nibh. Mauris et mollis purus. Ut nec tincidunt lacus. Nam at rutrum justo, vitae egestas dolor.',
            },
            {
                id: 4,
                title: 'Meeting',
                start: now.getFullYear() + '-' + this.getMonth(now) + '-12T10:30:00',
                end: now.getFullYear() + '-' + this.getMonth(now) + '-13T10:30:00',
                className: 'danger',
                description: 'Mauris ut mauris aliquam, fringilla sapien et, dignissim nisl. Pellentesque ornare velit non mollis fringilla.',
            },
            {
                id: 5,
                title: 'Lunch',
                start: now.getFullYear() + '-' + this.getMonth(now) + '-12T15:00:00',
                end: now.getFullYear() + '-' + this.getMonth(now) + '-13T15:00:00',
                className: 'info',
                description: 'Integer fermentum bibendum elit in egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            },
            {
                id: 6,
                title: 'Conference',
                start: now.getFullYear() + '-' + this.getMonth(now) + '-12T21:30:00',
                end: now.getFullYear() + '-' + this.getMonth(now) + '-13T21:30:00',
                className: 'success',
                description:
                    'Curabitur facilisis vel elit sed dapibus. Nunc sagittis ex nec ante facilisis, sed sodales purus rhoncus. Donec est sapien, porttitor et feugiat sed, eleifend quis sapien. Sed sit amet maximus dolor.',
            },
            {
                id: 7,
                title: 'Happy Hour',
                start: now.getFullYear() + '-' + this.getMonth(now) + '-12T05:30:00',
                end: now.getFullYear() + '-' + this.getMonth(now) + '-13T05:30:00',
                className: 'info',
                description:
                    ' odio lectus, porttitor molestie scelerisque blandit, hendrerit sed ex. Aenean malesuada iaculis erat, vitae blandit nisl accumsan ut.',
            },
            {
                id: 8,
                title: 'Dinner',
                start: now.getFullYear() + '-' + this.getMonth(now) + '-12T20:00:00',
                end: now.getFullYear() + '-' + this.getMonth(now) + '-13T20:00:00',
                className: 'danger',
                description:
                    'Sed purus urna, aliquam et pharetra ut, efficitur id mi. Pellentesque ut convallis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id: 9,
                title: 'Birthday Party',
                start: now.getFullYear() + '-' + this.getMonth(now) + '-27T20:00:00',
                end: now.getFullYear() + '-' + this.getMonth(now) + '-28T20:00:00',
                className: 'success',
                description:
                    'Sed purus urna, aliquam et pharetra ut, efficitur id mi. Pellentesque ut convallis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id: 10,
                title: 'New Talent Event',
                start: now.getFullYear() + '-' + this.getMonth(now, 1) + '-24T08:12:14',
                end: now.getFullYear() + '-' + this.getMonth(now, 1) + '-27T22:20:20',
                className: 'danger',
                description:
                    'Sed purus urna, aliquam et pharetra ut, efficitur id mi. Pellentesque ut convallis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id: 11,
                title: 'Other new',
                start: now.getFullYear() + '-' + this.getMonth(now, -1) + '-13T08:12:14',
                end: now.getFullYear() + '-' + this.getMonth(now, -1) + '-16T22:20:20',
                className: 'primary',
                description:
                    'Pellentesque ut convallis velit. Sed purus urna, aliquam et pharetra ut, efficitur id mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id: 13,
                title: 'Upcoming Event',
                start: now.getFullYear() + '-' + this.getMonth(now, 1) + '-15T08:12:14',
                end: now.getFullYear() + '-' + this.getMonth(now, 1) + '-18T22:20:20',
                className: 'primary',
                description:
                    'Pellentesque ut convallis velit. Sed purus urna, aliquam et pharetra ut, efficitur id mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
        ];
        this.calendarOptions.events = this.events;
    }

    getMonth(dt: Date, add: number = 0) {
        let month = dt.getMonth() + 1 + add;
        const str = (month < 10 ? '0' + month : month).toString();
        return str;
    }

    editEvent(data: any = null) {
        this.params = JSON.parse(JSON.stringify(this.defaultParams));
        this.isAddEventModal.open();
        this.initForm();
        if (data) {
            let obj = JSON.parse(JSON.stringify(data.event));
            this.params.setValue({
                id: obj.id ? obj.id : null,
                title: obj.title ? obj.title : null,
                start: this.dateFormat(obj.start),
                end: this.dateFormat(obj.end),
                type: obj.classNames ? obj.classNames[0] : 'primary',
                description: obj.extendedProps ? obj.extendedProps.description : '',
            });
            this.minStartDate = new Date();
            this.minEndDate = this.dateFormat(obj.start);
        } else {
            this.minStartDate = new Date();
            this.minEndDate = new Date();
        }
    }

    editDate(data: any) {
        let obj = {
            event: {
                start: data.start,
                end: data.end,
            },
        };
        this.editEvent(obj);
    }

    dateFormat(dt: any) {
        dt = new Date(dt);
        const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
        const date = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
        const hours = dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours();
        const mins = dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes();
        dt = dt.getFullYear() + '-' + month + '-' + date + 'T' + hours + ':' + mins;
        return dt;
    }

    saveEvent() {
        if (!this.params.value.title) {
            return;
        }
        if (!this.params.value.start) {
            return;
        }
        if (!this.params.value.end) {
            return;
        }

        if (this.params.value.id) {
            //update event
            let event = this.events.find((d: any) => d.id == this.params.value.id);
            event.title = this.params.value.title;
            event.start = this.params.value.start;
            event.end = this.params.value.end;
            event.description = this.params.value.description;
            event.className = this.params.value.type;
        } else {
            //add event
            let maxEventId = 0;
            if (this.events) {
                maxEventId = this.events.reduce((max: number, character: any) => (character.id > max ? character.id : max), this.events[0].id);
            }

            let event = {
                id: maxEventId + 1,
                title: this.params.value.title,
                start: this.params.value.start,
                end: this.params.value.end,
                description: this.params.value.description,
                className: this.params.value.type,
            };
            this.events.push(event);
        }
        this.calendar.getApi(); //refresh Calendar
        this.showMessage('Event has been saved successfully.');
        this.isAddEventModal.close();
    }

    startDateChange(event: any) {
        const dateStr = event.target;
        if (dateStr) {
            this.minEndDate = this.dateFormat(dateStr);
            this.params.patchValue({ end: '' });
        }
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
