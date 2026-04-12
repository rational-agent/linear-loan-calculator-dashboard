import {Component} from '@angular/core';
import {Loan} from 'src/app/core/model/loan';
import {FormsModule} from "@angular/forms";
import {LoanApiService} from "../../core/services/loan-api/loan-api.service";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'loan-overview',
    imports: [FormsModule, RouterLink],
    templateUrl: './loan-overview.component.html',
    styleUrls: ['./loan-overview.component.css'],
})
export class LoanOverview {

    protected loans: Loan[] = [];

    constructor(private loanApiService: LoanApiService) {
        this.getLoans();
    }

    protected getLoans() {
        this.loanApiService.getLoans().then((loans: Loan[]) => this.loans = loans);
    }

    protected delete(loan: Loan) {
        this.loanApiService.delete(loan).then(() => {
            this.loans = this.loans.filter(item => item.id !== loan.id);
        }).then(() => alert("Loan deleted")).finally(this.getLoans);
    }
}
