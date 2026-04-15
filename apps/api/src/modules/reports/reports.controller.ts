import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('daily-summary')
  getDailySummary(): Promise<{ date: string; currency: string; totalOrders: number; totalRevenue: number }> {
    return this.reportsService.getDailySummary();
  }
}
