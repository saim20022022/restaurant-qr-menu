import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  async getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return {
      module: 'categories',
      status: 'active',
      currency: 'TRY',
    };
  }
}
