import {Loan} from "../model/loan";
import {HttpClient} from "@angular/common/http";
import {CreateLoanDto} from "./create-loan-dto";
import {Injectable} from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LoanApiService {

    private readonly baseUrl = 'http://localhost:8080/loans';

    private loans: Loan[] = [];

    constructor(private http: HttpClient) {
    }

    refreshLoans(): Loan[] {
        this.http.get<Loan[]>(this.baseUrl).subscribe({
            next: value => {
                this.loans.length = 0;
                value.forEach(loan => this.loans.push(loan))
            },
            error: err => console.error(err),
            complete: () => console.log('Done')
        });

        console.log("Retrieved loans: ", this.loans.length)

        return this.loans;
    }

    getLoanById(id: number) {
        return this.http.get<Loan>(`${this.baseUrl}/${id}`).pipe()
    }

    createLoan(dto: CreateLoanDto) {
        this.http.post<Loan>(this.baseUrl, dto)
            .subscribe({
                next: loan => { console.log("Creating new loan with id: " + loan.id) },
                error: err => console.error(err),
                complete: () => console.log('New loan created')
            }).unsubscribe();
    }

    calculate(loan: Loan) {
        const url = `${this.baseUrl}/${loan.id}/payment-schedule/calculate`;

        this.http.post<Loan>(url, loan)
            .subscribe({
                next: loan => console.log("Calculating payments for loan with id: " + loan.id),
                error: err => console.error(err),
                complete: () => console.log('Payments calculated')
            }).unsubscribe();
    }

    deleteLoan(id: number) {
        this.http.delete<Boolean>(`${this.baseUrl}/${id}`)
            .subscribe({
                next: deleted => console.log("Deleting new loan with id: " + id),
                error: err => console.error(err),
                complete: () => console.log('Loan deleted')
            }).unsubscribe();
        return id;
    }

}