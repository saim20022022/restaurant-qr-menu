import { Injectable } from '@nestjs/common';

@Injectable()
export class LoyaltyService {
  async getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return {
      module: 'loyalty',
      status: 'active',
      currency: 'TRY',
    };
  }
}
