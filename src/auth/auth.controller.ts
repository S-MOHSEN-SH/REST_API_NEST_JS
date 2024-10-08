import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Authdto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin(@Body() dto: Authdto) {
    return this.authService.login(dto);
  }

  @Post('signup')
  signup(@Body() dto: Authdto) {
    return this.authService.signup(dto);
  }
}
