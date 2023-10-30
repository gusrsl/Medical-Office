/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { NotifiiService } from './notifii.service';
import { NotifiiGateway } from './notifii.gateway';
import { Socket } from 'socket.io';

@Module({
  providers: [NotifiiGateway, NotifiiService],
})
export class NotifiiModule {}
