import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './countdown.html',
})
export class CountdownComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor() {}

    timer1: any = null;
    demo1: any = {
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    };
    timer2: any = null;
    demo2: any = {
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    };

    ngAfterViewInit() {
        this.setTimerDemo1();
        this.setTimerDemo2();
    }

    setTimerDemo1() {
        let date = new Date();
        date.setDate(date.getDate() + 3);
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

    setTimerDemo2() {
        let date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        let countDownDate = date.getTime();

        this.timer2 = setInterval(() => {
            let now = new Date().getTime();

            let distance = countDownDate - now;

            this.demo2.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.demo2.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.demo2.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.demo2.seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(this.timer2);
            }
        }, 500);
    }
}
