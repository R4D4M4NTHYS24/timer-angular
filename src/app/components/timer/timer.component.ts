import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  initial: number = 60; // default initial time in seconds
  timeLeft: number = this.initial; // set timeLeft to initial time
  isRunning: boolean = false; // default is not running

  timerId: any;

  constructor() {}

  ngOnInit() {
    this.initial = 60; // default initial time in seconds
    this.timeLeft = this.initial;
    this.isRunning = false;
  }

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timerId = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.stopTimer();
        }
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.timerId);
    this.isRunning = false;
  }

  resetTimer() {
    this.stopTimer();
    this.timeLeft = this.initial;
  }

  addTime(time: number) {
    this.initial += time;
    this.timeLeft += time;
  }

  minusTime(time: number) {
    if (this.initial - time >= 0) {
      this.initial -= time;
      this.timeLeft -= time;
    }
  }

  getTimeString() {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return (
      minutes.toString().padStart(1, '0') +
      ' : ' +
      seconds.toString().padStart(2, '0')
    );
  }
}
