import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignUpPostDTO {
  @ApiProperty({
    example: 'barinhome@gmail.com',
    description: '유저가 입력한 아이디',
    required: true,
    type: String,
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'qkdlsgha12#$',
    description: '유저가 입력한 비밀번호',
    required: true,
    type: String,
  })
  @IsString()
  passWord: string;

  @ApiProperty({
    example: '김석봉',
    description: '유저 이름',
    required: true,

    type: String,
  })
  @IsString()
  name: string;
}

export class SignUpResDTO {
  constructor(userId: string, result: string) {
    this.userId = userId;
    this.result = result;
  }

  static create(param: { userId: string; result: string }) {
    const { userId, result } = param;
    return new SignUpResDTO(userId, result);
  }

  @ApiProperty({
    example: 'barinhome@gmail.com',
    description: '유저가 입력한 아이디',
    required: true,
    type: String,
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: '가입성공',
    description: '회원가입 결과',
    required: true,
    type: String,
  })
  @IsString()
  result: string;
}
