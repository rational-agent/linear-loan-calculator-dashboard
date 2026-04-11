import {Loan} from "../../model/loan";
import {CreateLoanDto} from "../../model/create-loan-dto";
import {Injectable} from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LoanApiService {

    private readonly baseUrl = 'http://localhost:8080/loans';

    constructor() {
    }

    public async createLoan(dto: CreateLoanDto) {
        try {
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dto)
            });

            const data: Loan = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    public async getLoans(): Promise<Loan[]> {
        const data = await fetch(this.baseUrl);
        return await data.json() ?? [];
    }

    public async calculate(loan: Loan) {
        const url = `${this.baseUrl}/${loan.id}/payment-schedule/calculate`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loan)
            });

            const data: Loan = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    public async delete(loan: Loan) {
        const url = `${this.baseUrl}/${loan.id}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loan)
            });

            const data: Loan = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

}