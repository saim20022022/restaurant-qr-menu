import { Controller, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly service: PaymentsService) {}

  @Get()
  getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return this.service.getOverview();
  }
}
