import {Loan} from "../model/loan";
import {HttpClient} from "@angular/common/http";
import {CreateLoanDto} from "./create-loan-dto";
import {Injectable} from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LoanApiService {

    private readonly baseUrl = 'http://localhost:8080/loans';

    constructor(private http: HttpClient) {}

    getLoans(): Loan[] {
        let loans: Loan[] = [];

        this.http.get<Loan[]>(this.baseUrl).subscribe({
            next: value => loans = value,
            error: err => console.error(err),
            complete: () => console.log('Done')
        }).unsubscribe();

        console.log("Retrieved loans: ", loans.length)

        return loans;
    }

    getLoanById(id: number) {
        return this.http.get<Loan>(`${this.baseUrl}/${id}`).pipe()
    }

    createLoan(dto: CreateLoanDto) {
        this.http.post<Loan>(this.baseUrl, dto)
            .subscribe((loan) => {
                console.log('New loan created:', loan.id);
            });
    }

    calculate(loan: Loan) {
        const url = `${this.baseUrl}/${loan.id}/payment-schedule/calculate`;

        this.http.post<Loan>(url, loan).subscribe(createdLoan => {
            console.log("Created loan id: {}", createdLoan)
        });
    }

    deleteLoan(id: number) {
        return this.http.delete<Loan>(`${this.baseUrl}/${id}`).pipe()
    }

}