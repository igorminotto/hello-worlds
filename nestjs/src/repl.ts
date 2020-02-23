import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as colors from 'colors';
import * as repl from 'repl';

(() => {
  const nestAppPromise = NestFactory.createApplicationContext(AppModule);
  const replOptions = {
    prompt: ` ${AppModule.APP_NAME} `.bgBlue.bold + ''.blue + ' ',
    useColors: true,
  };

  nestAppPromise.then(app => {
    const r = repl.start(replOptions);

    r.context.app = app;
    colors.enable();
  });
})();
