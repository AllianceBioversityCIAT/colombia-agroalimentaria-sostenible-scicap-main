import { Module } from '@nestjs/common';
import { SessionFormatsService } from './session-formats.service';
import { SessionFormatsController } from './session-formats.controller';

@Module({
  controllers: [SessionFormatsController],
  providers: [SessionFormatsService],
})
export class SessionFormatsModule {}
