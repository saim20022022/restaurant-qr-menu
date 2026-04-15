import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  getOverview(): Promise<{ module: string; status: string; currency: string }> {
    return this.service.getOverview();
  }
}
