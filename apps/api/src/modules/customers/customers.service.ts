import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  async getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return {
      module: 'customers',
      status: 'active',
      currency: 'TRY',
    };
  }
}
