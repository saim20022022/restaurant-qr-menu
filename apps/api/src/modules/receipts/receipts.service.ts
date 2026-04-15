import { Injectable } from '@nestjs/common';

@Injectable()
export class ReceiptsService {
  async getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return {
      module: 'receipts',
      status: 'active',
      currency: 'TRY',
    };
  }
}
