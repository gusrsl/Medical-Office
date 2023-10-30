/* eslint-disable prettier/prettier */
// notifii.gateway.ts

import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class NotifiiGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    // Lógica a ejecutar cuando un cliente (paciente) se conecta al servidor WebSocket.
    console.log(`Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    // Lógica a ejecutar cuando un cliente (paciente) se desconecta del servidor WebSocket.
    console.log(`Cliente desconectado: ${client.id}`);
  }

  sendNotificationToPatient(patientID: string, message: string) {
    // Enviar una notificación al paciente con el ID especificado.
    this.server.to(patientID).emit('notification', message);
  }
}
