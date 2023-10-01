// Abstract Product: ColorPicker
interface ColorPicker {
  pickColor(): string;
}

// Concrete Products: BlueColorPicker, RedColorPicker, GreenColorPicker, and YellowColorPicker
class BlueColorPicker implements ColorPicker {
  pickColor() {
    return 'Light Blue';
  }
}

class RedColorPicker implements ColorPicker {
  pickColor() {
    return 'Dark Red';
  }
}

class GreenColorPicker implements ColorPicker {
  pickColor() {
    return 'Green';
  }
}

class YellowColorPicker implements ColorPicker {
  pickColor() {
    return 'Yellow';
  }
}

// Abstract Factory: ColorPickerFactory
interface ColorPickerFactory {
  createColorPicker(): ColorPicker;
}

// Concrete Factories: LightColorPickerFactory, DarkColorPickerFactory, GreenColorPickerFactory, and YellowColorPickerFactory
class BlueColorPickerFactory implements ColorPickerFactory {
  createColorPicker(): ColorPicker {
    return new BlueColorPicker();
  }
}

class RedColorPickerFactory implements ColorPickerFactory {
  createColorPicker(): ColorPicker {
    return new RedColorPicker();
  }
}

class GreenColorPickerFactory implements ColorPickerFactory {
  createColorPicker(): ColorPicker {
    return new GreenColorPicker();
  }
}

class YellowColorPickerFactory implements ColorPickerFactory {
  createColorPicker(): ColorPicker {
    return new YellowColorPicker();
  }
}

// Client Code
const colorSwatches: NodeListOf<Element> = document.querySelectorAll('.color-swatch');

colorSwatches.forEach((swatch: Element) => {
  swatch.addEventListener('click', () => {
    const color: string = (swatch as HTMLElement).style.backgroundColor;
    createStickyNote(color);
  });
});

function createColorPicker(factory: ColorPickerFactory) {
  const colorPicker = factory.createColorPicker();
  const selectedColor = colorPicker.pickColor();
  const selectedColorElement = document.getElementById('selected-color');
  if (selectedColorElement) {
    selectedColorElement.textContent = `Selected Color: ${selectedColor}`;
  }

  // Create a sticky note for the selected color
  createStickyNote(selectedColor);
}

// Example usage
console.log('Creating Light Theme Color Picker:');
const blueFactory: ColorPickerFactory = new BlueColorPickerFactory();
createColorPicker(blueFactory);

console.log('\nCreating Dark Theme Color Picker:');
const redFactory: ColorPickerFactory = new RedColorPickerFactory();
createColorPicker(redFactory);

console.log('Creating Light Theme Color Picker:');
const greenFactory: ColorPickerFactory = new GreenColorPickerFactory();
createColorPicker(greenFactory);

console.log('\nCreating Dark Theme Color Picker:');
const yellowFactory: ColorPickerFactory = new YellowColorPickerFactory();
createColorPicker(yellowFactory);

// Sticky Note Container
const stickyNoteContainer: HTMLElement | null = document.getElementById('sticky-note-container');

function createStickyNote(color: string) {
  if (stickyNoteContainer) {
    const stickyNote: HTMLDivElement = document.createElement('div');
    stickyNote.className = 'sticky-note';
    stickyNote.style.backgroundColor = color;
    stickyNote.textContent = 'DRAG ME';
    stickyNoteContainer.appendChild(stickyNote);

    // Make the sticky note draggable
    makeElementDraggable(stickyNote);

    // Update the "Selected Color" text
    const selectedColorElement = document.getElementById('selected-color');
    if (selectedColorElement) {
      selectedColorElement.textContent = `Selected Color: ${color}`;
    }
  }
}

function makeElementDraggable(element: HTMLElement) {
  let offsetX: number = 0;
  let offsetY: number = 0;
  let isDragging: boolean = false;

  element.addEventListener('mousedown', (e: MouseEvent) => {
    isDragging = true;
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', (e: MouseEvent) => {
    if (!isDragging) return;
    element.style.left = e.clientX - offsetX + 'px';
    element.style.top = e.clientY - offsetY + 'px';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  element.addEventListener('dragstart', (e: DragEvent) => {
    e.preventDefault(); // Prevent default drag-and-drop behavior
  });
}
