const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [800, 800],
};

const sketch = () => {
  // render function:
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    // House
    // Set line width:
    context.lineWidth = 10;

    // Wall
    context.strokeRect(75, 140, 150, 110);

    // Door
    context.fillStyle = "black";
    context.fillRect(130, 190, 40, 60);

    // Roof
    context.beginPath();
    context.moveTo(50, 140);
    context.lineTo(150, 60);
    context.lineTo(250, 140);
    context.closePath();
    context.stroke();
  };
};

// initiator:
canvasSketch(sketch, settings);
