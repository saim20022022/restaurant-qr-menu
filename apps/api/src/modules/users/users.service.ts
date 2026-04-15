import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return {
      module: 'users',
      status: 'active',
      currency: 'TRY',
    };
  }
}
