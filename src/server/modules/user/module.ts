import { Module } from '@nestjs/common';

import { UserService } from './service';
import { UserController } from './controller';

@Module({
  // import Mongoose module for MongoDB connection
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
