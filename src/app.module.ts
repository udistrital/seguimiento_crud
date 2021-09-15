import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from './config/configuration';
import { SeguimientoModule } from './seguimiento/seguimiento.module';

@Module({
  //imports: [MongooseModule.forRoot('mongodb://localhost/seguimiento_crud'), SeguimientoModule],
  imports: [MongooseModule.forRoot(`mongodb://${environment.USER}:${environment.PASS}@`+
  `${environment.HOST}:${environment.PORT}/${environment.DB}?authSource=${environment.AUTH_DB}`, 
  { useFindAndModify: false }), SeguimientoModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
