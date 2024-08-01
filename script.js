const colors = ['#3498db', '#e74c3c', '#f1c40f', '#2ecc71', '#9b59b6', '#e67e22', '#1abc9c', '#ecf0f1', '#2c3e50', '#34495e'];
const shapes = ['square', 'circle', 'rectangle', 'oval', 'triangle-up', 'triangle-down',];

document.getElementById('changeColorButton').addEventListener('click', changeColor);
document.getElementById('changeShapeButton').addEventListener('click', changeShape);

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const shapeElement = document.getElementById('shape');
    shapeElement.style.backgroundColor = randomColor;
    if (shapeElement.classList.contains('triangle-up') || shapeElement.classList.contains('triangle-down') || shapeElement.classList.contains('diamond') || shapeElement.classList.contains('hexagon')) {
        changeShapeColor(randomColor);
    }
}

function changeShape() {
    const shapeElement = document.getElementById('shape');
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shapeElement.className = 'shape ' + randomShape;
    if (randomShape === 'triangle-up' || randomShape === 'triangle-down' || randomShape === 'diamond' || randomShape === 'hexagon') {
        shapeElement.style.backgroundColor = 'transparent';
    } else {
        shapeElement.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
}

function changeShapeColor(color) {
    const shapeElement = document.getElementById('shape');
    if (shapeElement.classList.contains('triangle-up') || shapeElement.classList.contains('triangle-down')) {
        shapeElement.style.borderBottomColor = color;
        shapeElement.style.borderTopColor = color;
    } else if (shapeElement.classList.contains('diamond')) {
        shapeElement.style.borderTopColor = color;
    } else if (shapeElement.classList.contains('hexagon')) {
        shapeElement.style.backgroundColor = color;
    }
}




