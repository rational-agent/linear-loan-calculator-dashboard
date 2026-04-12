import { Payment } from './payment'

export interface Loan {
    id: number;
    startDate: Date;
    endDate: Date;
    principal: number;
    interestRate: number;
    totalInterest: number;
    paymentSchedule: Payment[];
}
