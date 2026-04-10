
export interface CreateLoanDto {
    principal: number;
    interestRate: number;
    startDate: Date;
    endDate: Date;
    payDay: number;
}