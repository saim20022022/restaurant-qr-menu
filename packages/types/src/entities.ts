export type Role = 'ADMIN' | 'CASHIER' | 'WAITER' | 'KITCHEN' | 'CUSTOMER';

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: Role;
  isActive: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  price: number;
  currency: 'TRY';
  isAvailable: boolean;
}

export interface RestaurantTable {
  id: string;
  tableNumber: number;
  qrCode: string;
  capacity: number;
  isActive: boolean;
}

export interface OrderItem {
  id: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  note?: string;
}

export interface Order {
  id: string;
  tableId: string;
  customerId?: string;
  status: 'PENDING' | 'PREPARING' | 'READY' | 'SERVED' | 'PAID' | 'CANCELLED';
  totalAmount: number;
  items: OrderItem[];
  createdAt: string;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  method: 'CASH' | 'CARD' | 'ONLINE';
  currency: 'TRY';
  paidAt: string;
}

export interface Customer {
  id: string;
  fullName: string;
  phone?: string;
  email?: string;
  loyaltyPoints: number;
}

export interface LoyaltyTransaction {
  id: string;
  customerId: string;
  points: number;
  type: 'EARN' | 'SPEND' | 'ADJUST';
  createdAt: string;
}
