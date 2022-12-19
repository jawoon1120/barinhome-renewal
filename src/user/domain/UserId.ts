import { Identity } from '../../common/domain/Identity';

export class UserId extends Identity {
  constructor(key: string) {
    super(key);
  }
}
