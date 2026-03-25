import { Payment } from './payment'

export interface Loan {
    id: number;
    startDate: Date;
    endDate: Date;
    principal: number;
    interestRate: number;
    paymentSchedule: Payment[];
}
