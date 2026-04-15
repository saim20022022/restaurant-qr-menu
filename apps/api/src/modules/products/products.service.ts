import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  async getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return {
      module: 'products',
      status: 'active',
      currency: 'TRY',
    };
  }
}
