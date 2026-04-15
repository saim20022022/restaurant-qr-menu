import { Controller, Get } from '@nestjs/common';
import { LoyaltyService } from './loyalty.service';

@Controller('loyalty')
export class LoyaltyController {
  constructor(private readonly service: LoyaltyService) {}

  @Get()
  getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return this.service.getOverview();
  }
}
