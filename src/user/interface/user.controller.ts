import { Controller, Post, Req, Res, Body, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from '../application/user.service';
import { SignUpPostDTO, SignUpResDTO } from './dto/signup.dto';

@ApiTags('user')
@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  @ApiOperation({ summary: '회원가입 API' })
  @ApiResponse({
    status: 201,
    type: SignUpResDTO,
    description: '[정상흐름:성공] : 회원가입 성공',
  })
  async signUp(
    @Req() request,
    @Body() signUpData: SignUpPostDTO,
    @Res() response,
  ) {
    const { userId, passWord, name } = signUpData;
    const addedUser = await this.userService.signUp(userId, passWord, name);
    const signUpResDTO = SignUpResDTO.create({
      userId: addedUser.getUserId(),
      result: '가입성공',
    });
    return response.status(HttpStatus.CREATED).send(signUpResDTO);
  }
}
