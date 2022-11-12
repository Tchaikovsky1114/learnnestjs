import { Controller, Get, Post } from '@nestjs/common';


@Controller('messages')
export class MessagesController {

  @Get()
  listMessages() {
    return 'this is messages'
  }

  @Post()
  createMessage() {

  }

  @Get('/:id')
  getMessage() {

  }
}
