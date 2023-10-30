import { PartialType } from '@nestjs/mapped-types';
import { CreateNotifiiDto } from './create-notifii.dto';

export class UpdateNotifiiDto extends PartialType(CreateNotifiiDto) {
  id: number;
}
