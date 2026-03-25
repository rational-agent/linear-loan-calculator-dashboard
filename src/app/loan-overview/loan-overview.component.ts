import { Component } from '@angular/core';
import { Loan } from 'src/app/model/loan';
import {LoanApiService} from "../loan-api/loan-api.service";

@Component({
    selector: 'loan-overview',
    imports: [ ],
    templateUrl: './loan-overview.component.html',
    styleUrls: ['./loan-overview.component.css'],
})
export class LoanOverview {

    loans: Loan[] = [];

    constructor(private apiService: LoanApiService) {
        this.getLoans();
    }

    public getLoans() {
        this.loans = this.apiService.getLoans();
    }

    protected calculate(loan: Loan) {
        this.apiService.calculate(loan);
    }

    protected delete(loan: Loan) {
        this.apiService.deleteLoan(loan.id)
    }
}
