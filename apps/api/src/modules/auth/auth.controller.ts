import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from '../../decorators/public.decorator';
import { AuthService } from './auth.service';

interface LoginDto {
  email: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  login(@Body() body: LoginDto): { accessToken: string; tokenType: 'Bearer'; expiresIn: string } {
    return this.authService.login(body.email, body.password);
  }

  @Get('profile')
  profile(): { message: string } {
    return { message: 'Kimlik doğrulama başarılı.' };
  }
}
