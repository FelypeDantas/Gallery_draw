const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const downloadBtn = document.getElementById("downloadBtn");

let drawing = false;
let currentColor = colorPicker.value;
let size = brushSize.value;
let erasing = false;

// Atualizar cor
colorPicker.addEventListener("input", () => {
    currentColor = colorPicker.value;
    erasing = false;
});

// Atualizar tamanho
brushSize.addEventListener("input", () => {
    size = brushSize.value;
});

// Borracha
eraserBtn.addEventListener("click", () => {
    erasing = true;
});

// Limpar tela
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    localStorage.removeItem("savedDrawing");
});

// Baixar imagem
downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "desenho.png";
    link.href = canvas.toDataURL();
    link.click();
});

// Eventos de desenho
canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => {
    drawing = false;
    saveCanvas();
});
canvas.addEventListener("mouseleave", () => drawing = false);

canvas.addEventListener("mousemove", draw);

function draw(e) {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.fillStyle = erasing ? "white" : currentColor;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

// Salvar automaticamente
function saveCanvas() {
    localStorage.setItem("savedDrawing", canvas.toDataURL());
}

// Carregar desenho salvo
function loadCanvas() {
    const saved = localStorage.getItem("savedDrawing");
    if (!saved) return;

    const img = new Image();
    img.src = saved;
    img.onload = () => ctx.drawImage(img, 0, 0);
}

window.onload = loadCanvas;