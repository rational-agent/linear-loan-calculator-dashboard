import { Component } from '@angular/core';
import { Loan } from 'src/app/model/loan';
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'loan-overview',
    imports: [ FormsModule ],
    templateUrl: './loan-overview.component.html',
    styleUrls: ['./loan-overview.component.css'],
})
export class LoanOverview {

    private readonly baseUrl = 'http://localhost:8080/loans';

    protected loans: Loan[] = [];

    constructor(private http: HttpClient) {
        this.getLoans();
    }

    public getLoans() {
        this.http.get<Loan[]>(this.baseUrl).subscribe({
            next: retrievedLoans => this.resetLoans(retrievedLoans),
            error: err => console.error(err),
            complete: () => {
                alert("Retrieved loans: " + this.loans.length)
            }
        });
    }

    private resetLoans(newLoans: Loan[]) {
        console.log("Retrieving loans: ", newLoans.length)
        this.loans.length = 0;
        newLoans.forEach(loan => this.loans.push(loan))
        
    }

    protected calculate(loan: Loan) {
        const url = `${this.baseUrl}/${loan.id}/payment-schedule/calculate`;

        this.http.post<Loan>(url, loan)
            .subscribe({
                next: loan => console.log("Calculating payments for loan with id: " + loan.id),
                error: err => console.error(err),
                complete: () => console.log('Payments calculated')
            })

        this.getLoans();
    }

    protected delete(loan: Loan) {
        const url = `${this.baseUrl}/${loan.id}`;

        this.http.delete<Boolean>(url)
            .subscribe({
                next: () => console.log("Deleting new loan with id: " + loan.id),
                error: err => console.error(err),
                complete: () => alert('Loan deleted')
            })

        this.getLoans();
    }
}
