import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async getDailySummary(): Promise<{ date: string; currency: string; totalOrders: number; totalRevenue: number }> {
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
    const end = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999);

    const [totalOrders, aggregate] = await Promise.all([
      this.prisma.order.count({ where: { createdAt: { gte: start, lte: end } } }),
      this.prisma.order.aggregate({
        _sum: { totalAmount: true },
        where: { createdAt: { gte: start, lte: end } },
      }),
    ]);

    return {
      date: start.toISOString().slice(0, 10),
      currency: 'TRY',
      totalOrders,
      totalRevenue: Number(aggregate._sum.totalAmount ?? 0),
    };
  }
}
