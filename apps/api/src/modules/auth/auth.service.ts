import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(email: string, password: string): { accessToken: string; tokenType: 'Bearer'; expiresIn: string } {
    if (!email || !password) {
      throw new UnauthorizedException('E-posta ve şifre zorunludur.');
    }

    const accessToken = this.jwtService.sign({
      sub: email,
      email,
      role: 'ADMIN',
    });

    return {
      accessToken,
      tokenType: 'Bearer',
      expiresIn: process.env.JWT_EXPIRES_IN ?? '15m',
    };
  }
}
