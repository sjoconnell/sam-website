"use strict"
const canvas = document.querySelector(".draw")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext("2d")

function fadeOut () {
    ctx.fillStyle = "rgba(6,18,51,0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setTimeout(fadeOut,100);
}
fadeOut()

ctx.lineJoin = "round"
ctx.lineCap = "round"
ctx.lineWidth = 50

let isDrawing = false
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
    hue++
    if (hue >= 360) {
        hue = 0
    }
    if (ctx.lineWidth >= 250 || ctx.lineWidth <= 1) {
        direction = !direction
    }
    direction ? ctx.lineWidth++ : ctx.lineWidth--
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseenter', function (e) {
    lastX = e.offsetX
    lastY = e.offsetY
    isDrawing = true
})
canvas.addEventListener('mouseleave', () => isDrawing = false)
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.lineJoin = "round"
    ctx.lineCap = "round"
    ctx.lineWidth = 50
})