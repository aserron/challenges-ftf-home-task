import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validationSchemaForEnv } from './config/environment-variables';
import { PersistenceModule } from './persistence/persistence.module';

import { AuthModule } from './auth/auth.module';
import {GithubModule} from "./github/github.module";
import {GithubController} from "./github/github.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: validationSchemaForEnv,
    }),
      
    PersistenceModule,
    GithubModule,
    AuthModule,
  ],
  controllers: [AppController, GithubController],
  providers: [AppService],
})
export class AppModule {}
