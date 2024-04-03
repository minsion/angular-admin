import { Component, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { animate, style, transition, trigger } from '@angular/animations';
import { ModalComponent } from 'angular-custom-modal';

@Component({
    moduleId: module.id,
    templateUrl: './scrumboard.html',
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
        ]),
    ],
})
export class ScrumboardComponent {
    constructor() {}
    params = {
        id: null,
        title: '',
    };
    paramsTask = {
        projectId: null,
        id: null,
        title: '',
        description: '',
        tags: '',
    };
    selectedTask: any = null;
    @ViewChild('isAddProjectModal') isAddProjectModal!: ModalComponent;
    @ViewChild('isAddTaskModal') isAddTaskModal!: ModalComponent;
    @ViewChild('isDeleteModal') isDeleteModal!: ModalComponent;
    projectList: any = [
        {
            id: 1,
            title: 'In Progress',
            tasks: [
                {
                    projectId: 1,
                    id: 1.1,
                    title: 'Creating a new Portfolio on Dribble',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    image: true,
                    date: ' 08 Aug, 2020',
                    tags: ['designing'],
                },
                {
                    projectId: 1,
                    id: 1.2,
                    title: 'Singapore Team Meet',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    date: ' 09 Aug, 2020',
                    tags: ['meeting'],
                },
            ],
        },
        {
            id: 2,
            title: 'Pending',
            tasks: [
                {
                    projectId: 2,
                    id: 2.1,
                    title: 'Plan a trip to another country',
                    description: '',
                    date: ' 10 Sep, 2020',
                },
            ],
        },
        {
            id: 3,
            title: 'Complete',
            tasks: [
                {
                    projectId: 3,
                    id: 3.1,
                    title: 'Dinner with Kelly Young',
                    description: '',
                    date: ' 08 Aug, 2020',
                },
                {
                    projectId: 3,
                    id: 3.2,
                    title: 'Launch New SEO Wordpress Theme ',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    date: ' 09 Aug, 2020',
                },
            ],
        },
        {
            id: 4,
            title: 'Working',
            tasks: [],
        },
    ];

    addEditProject(project: any = null) {
        setTimeout(() => {
            this.params = {
                id: null,
                title: '',
            };
            if (project) {
                this.params = JSON.parse(JSON.stringify(project));
            }
            this.isAddProjectModal.open();
        });
    }

    saveProject() {
        if (!this.params.title) {
            this.showMessage('Title is required.', 'error');
            return;
        }

        if (this.params.id) {
            //update project
            const project = this.projectList.find((d: any) => d.id === this.params.id);
            project.title = this.params.title;
        } else {
            //add project
            const lastId = this.projectList.length
                ? this.projectList.reduce((max: number, obj: any) => (obj.id > max ? obj.id : max), this.projectList[0].id)
                : 0;

            const project = {
                id: lastId + 1,
                title: this.params.title,
                tasks: [],
            };
            this.projectList.push(project);
        }

        this.showMessage('Project has been saved successfully.');
        this.isAddProjectModal.close();
    }

    deleteProject(project: any) {
        this.projectList = this.projectList.filter((d: any) => d.id != project.id);
        this.showMessage('Project has been deleted successfully.');
    }

    clearProjects(project: any) {
        project.tasks = [];
    }

    // task
    addEditTask(projectId: any, task: any = null) {
        this.paramsTask = {
            projectId: null,
            id: null,
            title: '',
            description: '',
            tags: '',
        };
        if (task) {
            this.paramsTask = JSON.parse(JSON.stringify(task));
            this.paramsTask.tags = this.paramsTask.tags ? this.paramsTask.tags.toString() : '';
        }
        this.paramsTask.projectId = projectId;
        this.isAddTaskModal.open();
    }

    saveTask() {
        if (!this.paramsTask.title) {
            this.showMessage('Title is required.', 'error');
            return;
        }

        const project = this.projectList.find((d: any) => d.id === this.paramsTask.projectId);
        if (this.paramsTask.id) {
            //update task
            const task = project.tasks.find((d: any) => d.id === this.paramsTask.id);
            task.title = this.paramsTask.title;
            task.description = this.paramsTask.description;
            task.tags = this.paramsTask.tags?.length > 0 ? this.paramsTask.tags.split(',') : [];
        } else {
            //add task
            let maxid = 0;
            if (project.tasks?.length) {
                maxid = project.tasks.reduce((max: number, obj: any) => (obj.id > max ? obj.id : max), project.tasks[0].id);
            }

            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth()); //January is 0!
            const yyyy = today.getFullYear();
            const monthNames: any = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            const task = {
                projectId: this.paramsTask.projectId,
                id: maxid + 0.1,
                title: this.paramsTask.title,
                description: this.paramsTask.description,
                date: dd + ' ' + monthNames[mm] + ', ' + yyyy,
                tags: this.paramsTask.tags?.length > 0 ? this.paramsTask.tags.split(',') : [],
            };

            project.tasks.push(task);
        }

        this.showMessage('Task has been saved successfully.');
        this.isAddTaskModal.close();
    }

    deleteConfirmModal(projectId: any, task: any = null) {
        this.selectedTask = task;
        setTimeout(() => {
            this.isDeleteModal.open();
        }, 10);
    }

    deleteTask() {
        let project = this.projectList.find((d: any) => d.tasks.find((t: any) => t.id === this.selectedTask.id));
        project.tasks = project.tasks.filter((d: any) => d.id != this.selectedTask.id);

        this.showMessage('Task has been deleted successfully.');
        this.isDeleteModal.close();
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
