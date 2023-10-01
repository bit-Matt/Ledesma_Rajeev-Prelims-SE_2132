// Concrete Products: BlueColorPicker, RedColorPicker, GreenColorPicker, and YellowColorPicker
var BlueColorPicker = /** @class */ (function () {
    function BlueColorPicker() {
    }
    BlueColorPicker.prototype.pickColor = function () {
        return 'Light Blue';
    };
    return BlueColorPicker;
}());
var RedColorPicker = /** @class */ (function () {
    function RedColorPicker() {
    }
    RedColorPicker.prototype.pickColor = function () {
        return 'Dark Red';
    };
    return RedColorPicker;
}());
var GreenColorPicker = /** @class */ (function () {
    function GreenColorPicker() {
    }
    GreenColorPicker.prototype.pickColor = function () {
        return 'Green';
    };
    return GreenColorPicker;
}());
var YellowColorPicker = /** @class */ (function () {
    function YellowColorPicker() {
    }
    YellowColorPicker.prototype.pickColor = function () {
        return 'Yellow';
    };
    return YellowColorPicker;
}());
// Concrete Factories: LightColorPickerFactory, DarkColorPickerFactory, GreenColorPickerFactory, and YellowColorPickerFactory
var BlueColorPickerFactory = /** @class */ (function () {
    function BlueColorPickerFactory() {
    }
    BlueColorPickerFactory.prototype.createColorPicker = function () {
        return new BlueColorPicker();
    };
    return BlueColorPickerFactory;
}());
var RedColorPickerFactory = /** @class */ (function () {
    function RedColorPickerFactory() {
    }
    RedColorPickerFactory.prototype.createColorPicker = function () {
        return new RedColorPicker();
    };
    return RedColorPickerFactory;
}());
var GreenColorPickerFactory = /** @class */ (function () {
    function GreenColorPickerFactory() {
    }
    GreenColorPickerFactory.prototype.createColorPicker = function () {
        return new GreenColorPicker();
    };
    return GreenColorPickerFactory;
}());
var YellowColorPickerFactory = /** @class */ (function () {
    function YellowColorPickerFactory() {
    }
    YellowColorPickerFactory.prototype.createColorPicker = function () {
        return new YellowColorPicker();
    };
    return YellowColorPickerFactory;
}());
// Client Code
var colorSwatches = document.querySelectorAll('.color-swatch');
colorSwatches.forEach(function (swatch) {
    swatch.addEventListener('click', function () {
        var color = swatch.style.backgroundColor;
        createStickyNote(color);
    });
});
function createColorPicker(factory) {
    var colorPicker = factory.createColorPicker();
    var selectedColor = colorPicker.pickColor();
    var selectedColorElement = document.getElementById('selected-color');
    if (selectedColorElement) {
        selectedColorElement.textContent = "Selected Color: ".concat(selectedColor);
    }
    // Create a sticky note for the selected color
    createStickyNote(selectedColor);
}
// Example usage
console.log('Creating Light Theme Color Picker:');
var blueFactory = new BlueColorPickerFactory();
createColorPicker(blueFactory);
console.log('\nCreating Dark Theme Color Picker:');
var redFactory = new RedColorPickerFactory();
createColorPicker(redFactory);
console.log('Creating Light Theme Color Picker:');
var greenFactory = new GreenColorPickerFactory();
createColorPicker(greenFactory);
console.log('\nCreating Dark Theme Color Picker:');
var yellowFactory = new YellowColorPickerFactory();
createColorPicker(yellowFactory);
// Sticky Note Container
var stickyNoteContainer = document.getElementById('sticky-note-container');
function createStickyNote(color) {
    if (stickyNoteContainer) {
        var stickyNote = document.createElement('div');
        stickyNote.className = 'sticky-note';
        stickyNote.style.backgroundColor = color;
        stickyNote.textContent = 'DRAG ME';
        stickyNoteContainer.appendChild(stickyNote);
        // Make the sticky note draggable
        makeElementDraggable(stickyNote);
        // Update the "Selected Color" text
        var selectedColorElement = document.getElementById('selected-color');
        if (selectedColorElement) {
            selectedColorElement.textContent = "Selected Color: ".concat(color);
        }
    }
}
function makeElementDraggable(element) {
    var offsetX = 0;
    var offsetY = 0;
    var isDragging = false;
    element.addEventListener('mousedown', function (e) {
        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
    });
    document.addEventListener('mousemove', function (e) {
        if (!isDragging)
            return;
        element.style.left = e.clientX - offsetX + 'px';
        element.style.top = e.clientY - offsetY + 'px';
    });
    document.addEventListener('mouseup', function () {
        isDragging = false;
    });
    element.addEventListener('dragstart', function (e) {
        e.preventDefault(); // Prevent default drag-and-drop behavior
    });
}
