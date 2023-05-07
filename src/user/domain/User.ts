import { AggregateRoot } from '../../common/domain/AggregateRoot';
import { UserId } from './UserId';

export class User extends AggregateRoot<UserId> {
  constructor(
    id: UserId,
    private name: string,
    private userId: string,
    private passWord: string,
    private signedInAt: Date | null,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
  ) {
    super(id, createdAt, updatedAt, deletedAt);
    this.name = name;
    this.userId = userId;
    this.passWord = passWord;
    this.signedInAt = signedInAt;
  }

  static create(param: {
    id: UserId;
    name: string;
    userId: string;
    passWord: string;
  }) {
    const { id, name, userId, passWord } = param;

    return new User(
      id,
      name,
      userId,
      passWord,
      null,
      new Date(),
      new Date(),
      null,
    );
  }

  signIn(param: { passWord: string }) {
    const { passWord } = param;
    if (this.passWord !== passWord) throw new Error();
    this.signedInAt = new Date();
  }

  updateName(name: string) {
    this.name = name;
  }

  updatePassWord(passWord: string) {
    this.passWord = passWord;
  }

  getName(): string {
    return this.name;
  }

  getPassWord(): string {
    return this.passWord;
  }

  getUserId(): string {
    return this.userId;
  }

  getSignedInAt(): Date {
    return this.signedInAt;
  }
}
