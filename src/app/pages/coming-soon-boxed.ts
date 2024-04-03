import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './coming-soon-boxed.html',
})
export class ComingSoonBoxedComponent {
    constructor(public router: Router) {}
    timer1: any = null;
    demo1: any = {
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    };
    currYear: number = new Date().getFullYear();

    ngOnInit() {
        this.setTimerDemo1();
    }

    setTimerDemo1() {
        let date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        let countDownDate = date.getTime();

        this.timer1 = setInterval(() => {
            let now = new Date().getTime();

            let distance = countDownDate - now;

            this.demo1.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.demo1.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.demo1.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.demo1.seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(this.timer1);
            }
        }, 500);
    }
}
