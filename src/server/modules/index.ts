import { Module } from '@nestjs/common';
import { UserModule } from './user/module';
// import { UserController } from './user/controller';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModules {}
