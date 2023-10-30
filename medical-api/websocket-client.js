/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
const io = require("socket.io-client");

// Establece la URL de tu servidor WebSocket
const socket = io("http://localhost:3000"); // Asegúrate de usar el puerto correcto

// Maneja la conexión al servidor
socket.on("connect", () => {
  console.log("Conexión exitosa al servidor WebSocket");

  // Aquí puedes emitir eventos al servidor
  // Por ejemplo, para enviar una notificación al paciente con ID "123"
  const patientID = "123";
  socket.emit("notification", { patientID, message: "Prueba de notificación" });
});

// Maneja los mensajes que llegan del servidor
socket.on("notification", (data) => {
  console.log("Notificación recibida:", data);
});

// Maneja la desconexión del servidor
socket.on("disconnect", () => {
  console.log("Desconectado del servidor WebSocket");
});

// En este ejemplo, se envía una notificación al paciente con ID "123"
