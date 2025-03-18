const canvas = document.getElementById('tetri');
const context = canvas.getContext('2d');
context.scale(20, 20); // Escala todo lo que se dibuja en el canvas por 20

// ... Aquí iría la lógica del juego ...

function update() {
  // Actualiza el juego
  draw();
  requestAnimationFrame(update); // Continúa el ciclo de animación
}

function draw() {
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  // Dibuja el juego aquí
}

update(); // Inicia el ciclo de juego