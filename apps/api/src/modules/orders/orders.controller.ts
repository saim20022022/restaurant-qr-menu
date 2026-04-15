import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Get()
  getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return this.service.getOverview();
  }
}
