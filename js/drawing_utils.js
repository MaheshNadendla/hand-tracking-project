// js/drawing_utils.js
function drawConnectors(ctx, landmarks, connections, options = {}) {
    const color = options.color || '#00FF00';
    const lineWidth = options.lineWidth || 1;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    for (const connection of connections) {
        const [startIdx, endIdx] = connection;
        const start = landmarks[startIdx];
        const end = landmarks[endIdx];
        ctx.beginPath();
        ctx.moveTo(start.x * ctx.canvas.width, start.y * ctx.canvas.height);
        ctx.lineTo(end.x * ctx.canvas.width, end.y * ctx.canvas.height);
        ctx.stroke();
    }
}

function drawLandmarks(ctx, landmarks, options = {}) {
    const color = options.color || '#FF0000';
    const lineWidth = options.lineWidth || 2;
    ctx.fillStyle = color;

    for (const landmark of landmarks) {
        ctx.beginPath();
        ctx.arc(landmark.x * ctx.canvas.width, landmark.y * ctx.canvas.height, 3, 0, 2 * Math.PI);
        ctx.fill();
    }
}
