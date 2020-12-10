import { LoggerMiddleware } from './middlewares/logger.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { TodoModule } from './todo/todo.module';
import { HelmetMiddleware } from '@nest-middlewares/helmet';

@Module({
  imports: [
    TestModule,
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer      
    .apply(HelmetMiddleware).forRoutes('')
    .apply(LoggerMiddleware).forRoutes('')
  }
}
