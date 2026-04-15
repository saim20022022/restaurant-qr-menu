import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get()
  getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return this.service.getOverview();
  }
}
