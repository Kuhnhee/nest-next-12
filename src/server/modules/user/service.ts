import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';

import { User } from 'src/shared/types';

const DUMMY_USERS = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jane Foster' },
];

@Injectable()
export class UserService {
  getUsers(): Observable<User> {
    return from(DUMMY_USERS);
  }
}
