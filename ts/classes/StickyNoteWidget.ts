export class StickyNoteWidget {
    private stickyNoteInput: HTMLInputElement | null;
    private addStickyNoteButton: HTMLElement | null;
    private stickyNoteList: HTMLElement | null;

    constructor() {
        this.stickyNoteInput = document.getElementById('sticky-note') as HTMLInputElement;
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
        const stickyNotes: string[] = [];
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
            const stickyNotes: string[] = JSON.parse(savedStickyNotes);
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