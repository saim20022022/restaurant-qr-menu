import { Injectable } from '@nestjs/common';

@Injectable()
export class TablesService {
  async getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return {
      module: 'tables',
      status: 'active',
      currency: 'TRY',
    };
  }
}
