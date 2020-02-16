import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as repl from 'repl';
import { enable } from 'colors';

function run() {
    NestFactory.createApplicationContext(AppModule)
        .then(app => {
            enable();
            const r = repl.start({
              useColors: true,
              prompt: 'nest.js >'.bgRed.bold + ' '
            })

            r.context.app = app
        })
}
run()
