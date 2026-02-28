// Classe base abstrata
class Drawing {
    draw(context, width, height) {
        throw new Error("Método 'draw' deve ser implementado na classe derivada.");
    }
}

// Registro de desenhos
const drawingRegistry = {};

function registerDrawing(name, drawingClass) {
    drawingRegistry[name] = drawingClass;
}

function getDrawing(name) {
    const DrawingClass = drawingRegistry[name];
    if (!DrawingClass) {
        throw new Error(`Desenho '${name}' não registrado.`);
    }
    return new DrawingClass();
}

// Desenho 1: Bandeira
class FlagDrawing extends Drawing {
    draw(context, width, height) {
        context.fillStyle = "green";
        context.fillRect(0, 0, width, height);

        context.fillStyle = "yellow";
        context.beginPath();
        context.moveTo(width / 2, 50);
        context.lineTo(50, height / 2);
        context.lineTo(width - 50, height / 2);
        context.fill();

        context.beginPath();
        context.moveTo(width / 2, height - 50);
        context.lineTo(50, height / 2);
        context.lineTo(width - 50, height / 2);
        context.fill();

        context.fillStyle = "Darkblue";
        context.beginPath();
        context.arc(width / 2, height / 2, 100, 0, 2 * Math.PI);
        context.fill();
    }
}

// Desenho 2: Sol
class SunDrawing extends Drawing {
    draw(context, width, height) {
        context.fillStyle = "lightblue";
        context.fillRect(0, 0, width, height);

        context.fillStyle = "yellow";
        context.beginPath();
        context.arc(width / 2, height / 2, 100, 0, 2 * Math.PI);
        context.fill();

        context.strokeStyle = "orange";
        for (let i = 0; i < 360; i += 15) {
            const angle = (i * Math.PI) / 180;
            const x1 = width / 2 + Math.cos(angle) * 100;
            const y1 = height / 2 + Math.sin(angle) * 100;
            const x2 = width / 2 + Math.cos(angle) * 130;
            const y2 = height / 2 + Math.sin(angle) * 130;

            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
        }
    }
}

// Desenho 3: Creeper
class CreeperDrawing extends Drawing {
    draw(context, width, height) {
        // Cabeça
        context.fillStyle = "DarkGreen";
        context.fillRect(width * 0.33, height * 0.125, width * 0.58, height * 0.75);

        // Olhos
        context.fillStyle = "black";
        context.fillRect(width * 0.42, height * 0.275, width * 0.15, height * 0.225);
        context.fillRect(width * 0.68, height * 0.275, width * 0.15, height * 0.225);

        // Nariz
        context.fillRect(width * 0.57, height * 0.5, width * 0.12, height * 0.25);

        // Boca
        context.fillRect(width * 0.5, height * 0.6, width * 0.08, height * 0.275);
        context.fillRect(width * 0.68, height * 0.6, width * 0.08, height * 0.275);
    }
}

//Desenho 4: Árvore
class TreeDrawing extends Drawing {
    draw(context, width, height) {
        // Céu
        context.fillStyle = "#87CEEB";
        context.fillRect(0, 0, width, height);

        // Tronco
        context.fillStyle = "#8B4513";
        context.fillRect(width / 2 - 20, height / 2, 40, height / 3);

        // Copa
        context.fillStyle = "green";
        context.beginPath();
        context.arc(width / 2, height / 2, 80, 0, 2 * Math.PI);
        context.fill();
    }
}

// Desenho 5: Casa
class HouseDrawing extends Drawing {
    draw(context, width, height) {
        // Céu
        context.fillStyle = "#ADD8E6";
        context.fillRect(0, 0, width, height);

        // Base da casa
        context.fillStyle = "#DEB887";
        context.fillRect(width / 3, height / 2, width / 3, height / 3);

        // Telhado
        context.fillStyle = "#8B0000";
        context.beginPath();
        context.moveTo(width / 2, height / 3);
        context.lineTo(width / 3, height / 2);
        context.lineTo(width * 2 / 3, height / 2);
        context.closePath();
        context.fill();

        // Porta
        context.fillStyle = "#654321";
        context.fillRect(width / 2 - 20, height * 0.65, 40, 60);
    }
}

// Desenho 6: Foguete
class RocketDrawing extends Drawing {
    draw(context, width, height) {
        // Fundo
        context.fillStyle = "black";
        context.fillRect(0, 0, width, height);

        // Corpo
        context.fillStyle = "white";
        context.fillRect(width / 2 - 25, height / 3, 50, height / 2);

        // Ponta
        context.fillStyle = "red";
        context.beginPath();
        context.moveTo(width / 2, height / 4);
        context.lineTo(width / 2 - 25, height / 3);
        context.lineTo(width / 2 + 25, height / 3);
        context.closePath();
        context.fill();

        // Fogo
        context.fillStyle = "orange";
        context.beginPath();
        context.moveTo(width / 2 - 15, height * 0.83);
        context.lineTo(width / 2 + 15, height * 0.83);
        context.lineTo(width / 2, height);
        context.fill();
    }
}

// Desenho 7: Estrela
class StarDrawing extends Drawing {
    draw(context, width, height) {
        context.fillStyle = "black";
        context.fillRect(0, 0, width, height);

        context.fillStyle = "yellow";
        context.beginPath();

        const cx = width / 2;
        const cy = height / 2;
        const spikes = 5;
        const outerRadius = 100;
        const innerRadius = 40;

        for (let i = 0; i < spikes * 2; i++) {
            const angle = (Math.PI / spikes) * i;
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;
            i === 0 ? context.moveTo(x, y) : context.lineTo(x, y);
        }

        context.closePath();
        context.fill();
    }
}


// Registro dos desenhos
registerDrawing('bandeira', FlagDrawing);
registerDrawing('sol', SunDrawing);
registerDrawing('Creeper', CreeperDrawing);
registerDrawing('arvore', TreeDrawing);
registerDrawing('casa', HouseDrawing);
registerDrawing('foguete', RocketDrawing);
registerDrawing('estrela', StarDrawing);

// Função para adicionar um desenho à galeria
function addToGallery(drawingName) {
    const thumbnail = document.createElement('canvas');
    thumbnail.width = 150;
    thumbnail.height = 100;
    thumbnail.classList.add('gallery-item');

    const context = thumbnail.getContext('2d');
    const drawing = getDrawing(drawingName);
    drawing.draw(context, thumbnail.width, thumbnail.height);

    thumbnail.addEventListener('click', () => {
        const mainCanvas = document.querySelector('#mainCanvas');
        const mainContext = mainCanvas.getContext('2d');
        mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
        drawing.draw(mainContext, mainCanvas.width, mainCanvas.height);
    });

    document.querySelector('.gallery').appendChild(thumbnail);
}

// Adicionar desenhos dinamicamente
addToGallery('bandeira');
addToGallery('sol');
addToGallery('Creeper');
addToGallery('arvore');
addToGallery('casa');
addToGallery('foguete');
addToGallery('estrela');