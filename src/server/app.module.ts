import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';

import { NODE_ENV } from 'src/shared/consts';
// import { AppModules } from './modules';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // passes next server instance to footRootAsync func
    RenderModule.forRootAsync(Next({ dev: NODE_ENV === 'development' }), {
      viewsDir: null, // default: 'views'
    }),
    // add service modules
    // AppModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
