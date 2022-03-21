import { Controller, Get, Param, Render } from '@nestjs/common';
import { toArray, map } from 'rxjs';

import { UserService } from './service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  @Render('index')
  home() {
    console.log("it's home");
    return this.userService.getUsers().pipe(
      toArray(),
      map((user) => ({ user })),
    );
  }

  @Get(':id')
  @Render('[id]')
  public blogUser(@Param('id') id: string) {
    console.log("it's user page");
    return {};
  }
}
