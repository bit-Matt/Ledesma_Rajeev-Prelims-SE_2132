"use strict";

export class ClockWidget {
    constructor() {
        this.clockTimeElement = document.getElementById('clock-time');
        setInterval(() => this.displayTime(), 1000);
    }
    displayTime() {
        if (this.clockTimeElement) {
            const currentTime = new Date().toLocaleTimeString();
            this.clockTimeElement.textContent = currentTime;
        }
    }
}
