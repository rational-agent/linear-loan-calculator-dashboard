import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan } from 'src/app/model/loan';
import {CreateLoan} from "../create-loan/create-loan.component";

@Component({
    selector: 'loan-overview',
    imports: [ CreateLoan ],
    templateUrl: './loan-overview.component.html',
    styleUrls: ['./loan-overview.component.css'],
})
export class LoanOverview {

    readonly ROOT_URL = 'http://localhost:8080';
    readonly GET_LOANS = this.ROOT_URL + "/loans";

    loans: Loan[] = [];

    constructor(private http: HttpClient) {
        this.getLoans();
    };

    protected getLoans() {
        this.http.get<Loan[]>(this.GET_LOANS).subscribe((loans: Loan[]) => {
            this.loans = loans;
        })
    }

    protected calculate(loan: Loan) {
        const url = this.GET_LOANS + "/" + loan.id + "/payment-schedule/calculate";
        console.log("Calling: " + url)

        this.http.post<Loan>(url, loan)
            .subscribe((loan) => {
                console.log('Calculated {} new payments', loan.paymentSchedule.length);
            });

    }

    protected delete(loan: Loan) {
        const url = this.GET_LOANS + "/" + loan.id;
        console.log("Calling: " + url)

        this.http.delete(url).subscribe(() => {});
    }
}
