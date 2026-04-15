import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  async getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return {
      module: 'orders',
      status: 'active',
      currency: 'TRY',
    };
  }
}
