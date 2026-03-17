
export interface Payment {
    id: number;
    paymentDate: Date;
    principalPayment: number;
    interestPayment: number;
    remainingLoanAmount: number;
}
