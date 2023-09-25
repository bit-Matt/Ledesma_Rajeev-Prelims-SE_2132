"use strict";

export class StickyNoteWidget {
    constructor() {
        this.stickyNoteInput = document.getElementById('sticky-note');
        this.addStickyNoteButton = document.getElementById('add-sticky-note');
        this.stickyNoteList = document.getElementById('sticky-note-list');
        if (this.addStickyNoteButton) {
            this.addStickyNoteButton.addEventListener('click', () => this.addStickyNote());
        }
        this.loadStickyNotes();
    }
    addStickyNote() {
        if (this.stickyNoteInput) {
            const noteText = this.stickyNoteInput.value.trim();
            if (noteText !== '') {
                const listItem = document.createElement('li');
                listItem.className = 'sticky-note-item';
                listItem.textContent = noteText;
                if (this.stickyNoteList) {
                    this.stickyNoteList.appendChild(listItem);
                }
                if (this.stickyNoteInput) {
                    this.stickyNoteInput.value = '';
                }
                // Save the sticky note to localStorage
                this.saveStickyNotes();
            }
        }
    }
    saveStickyNotes() {
        const stickyNotes = [];
        if (this.stickyNoteList) {
            const stickyNoteItems = this.stickyNoteList.querySelectorAll('.sticky-note-item');
            stickyNoteItems.forEach((item) => {
                stickyNotes.push(item.textContent || '');
            });
        }
        localStorage.setItem('stickyNotes', JSON.stringify(stickyNotes));
    }
    loadStickyNotes() {
        const savedStickyNotes = localStorage.getItem('stickyNotes');
        if (savedStickyNotes) {
            const stickyNotes = JSON.parse(savedStickyNotes);
            stickyNotes.forEach((noteText) => {
                const listItem = document.createElement('li');
                listItem.className = 'sticky-note-item';
                listItem.textContent = noteText;
                if (this.stickyNoteList) {
                    this.stickyNoteList.appendChild(listItem);
                }
            });
        }
    }
}

