"use strict";
import { ClockWidget } from "./classes/ClockWidget.js";
import { StickyNoteWidget } from "./classes/StickyNoteWidget.js";
// Initialize widgets
const clock = ClockWidget.getInstance();
clock.displayTime();
setInterval(() => clock.displayTime(), 1000);
const stickyNote = new StickyNoteWidget();
