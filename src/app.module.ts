import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './controllers/items/items.controller';

@Module({
  imports: [],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
