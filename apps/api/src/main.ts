import {Logger} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {HttpExceptionFilter} from "./common/filters/http-exception.filter";
import {AnyExceptionFilter} from "./common/filters/any-exception.filter";

declare const module: any;

async function bootstrap() {

    const logger = new Logger('EntryPoint');
    const app = await NestFactory.create(AppModule);


    /* Global Error Handling      ********************************************/

    // Register the global exception filter
    app.useGlobalFilters(new AnyExceptionFilter());

    // Apply the global error filter
    app.useGlobalFilters(new HttpExceptionFilter());


    /* Swagger / Open API    **************************************************/
    const config = new DocumentBuilder()
        .setTitle('Leaves Tracker')
        .setDescription('Api Docs GitHub Consumer')
        .addTag('git')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('doc', app, document);
    

    /* Web App Server Lunch ***************************************************/
    const PORT = 5002;
    await app.listen(PORT);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
    logger.log(`Server running on http://localhost:${PORT}`);
    
}

console.info('Invoke boostrap function');

// note:
// extra try/catch with nonsense then.catch allowed tracking a prisma serialization bug. 
// In short: allow deep critical error breakpoint, debug and inspection.

try {
    bootstrap()
        .then(app => {
            console.info('Bootstrap Completed', app)
        })
        .catch(reason => {
            console.error('Bootstrap Fail. reason:',reason)
        });

} catch (e) {
    // note that above error are flagged as Bootstrap related.
    console.error('Error while invoking bootstrap', e)
}
