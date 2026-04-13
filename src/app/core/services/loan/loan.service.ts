import {Loan} from "../../model/loan";
import {CreateLoanDto} from "../../model/create-loan-dto";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class LoanService {

    private readonly baseUrl = 'http://localhost:8080/loans';

    constructor(private http: HttpClient) {
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

    public getLoansObservable(): Observable<Loan[]> {
        return this.http.get<Loan[]>(this.baseUrl);
    }

    public async getLoans(): Promise<Loan[]> {
        const data = await fetch(this.baseUrl);
        return await data.json() ?? [];
    }

    public async getLoan(id: Number): Promise<Loan> {
        const url = `${this.baseUrl}/${id}`
        const data = await fetch(url);
        return await data.json() ?? undefined;
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