import { Injectable } from '@nestjs/common';
import { Message } from '@dynasty-of-womens/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
