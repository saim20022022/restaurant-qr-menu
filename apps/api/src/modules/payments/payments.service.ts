import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  async getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return {
      module: 'payments',
      status: 'active',
      currency: 'TRY',
    };
  }
}
