"use strict";
export class ClockWidget {
    constructor() { }
    static getInstance() {
        if (ClockWidget.instance === null) {
            ClockWidget.instance = new ClockWidget();
        }
        return ClockWidget.instance;
    }
    displayTime() {
        const clockTimeElement = document.getElementById('clock-time');
        if (clockTimeElement) {
            const currentTime = new Date().toLocaleTimeString();
            clockTimeElement.textContent = currentTime;
        }
    }
}
ClockWidget.instance = null;
