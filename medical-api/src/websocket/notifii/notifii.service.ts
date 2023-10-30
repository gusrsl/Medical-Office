import { Injectable } from '@nestjs/common';
import { NotifiiGateway } from './notifii.gateway';

@Injectable()
export class NotifiiService {
  constructor(private readonly notifiiGateway: NotifiiGateway) {}

  // Método para enviar una notificación cuando se agenda una cita médica
  sendCitaAgendadaNotificationToPatient(patientID: string) {
    const message = 'Se ha agendado una nueva cita médica con éxito.';
    this.sendNotificationToPatient(patientID, message);
  }

  // Método para enviar una notificación cuando se cancela una cita médica
  sendCitaCanceladaNotificationToPatient(patientID: string) {
    const message = 'Su cita médica ha sido cancelada.';
    this.sendNotificationToPatient(patientID, message);
  }

  // Método para enviar una notificación personalizada a un paciente
  sendCustomNotificationToPatient(patientID: string, customMessage: string) {
    this.sendNotificationToPatient(patientID, customMessage);
  }

  // Método para enviar una notificación a un paciente específico
  private sendNotificationToPatient(patientID: string, message: string) {
    // Puedes realizar tareas adicionales aquí antes de enviar la notificación.

    // Llama al método del gateway para enviar la notificación al paciente.
    this.notifiiGateway.sendNotificationToPatient(patientID, message);
  }
}
