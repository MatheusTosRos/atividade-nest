import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosModule } from './produtos/produtos.module';
import { ModificaValorMiddleware } from './produtos/middleware/valor.middleware';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/products-nest'),
    ProdutosModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ModificaValorMiddleware)
      .forRoutes({ path: 'produtos/', method: RequestMethod.POST });
  }
}

