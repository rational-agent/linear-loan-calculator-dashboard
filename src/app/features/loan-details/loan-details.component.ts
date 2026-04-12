import {Component} from '@angular/core';
import {Loan} from 'src/app/core/model/loan';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {LoanApiService} from "../../core/services/loan-api/loan-api.service";

@Component({
    selector: 'loan-details',
    imports: [FormsModule],
    templateUrl: './loan-details.component.html',
    styleUrls: ['./loan-details.component.css'],
})
export class LoanDetails {
    loanId = 0
    loan: Loan | undefined

    constructor(private loanApiService: LoanApiService, private route: ActivatedRoute) {
        this.loanId = Number(this.route.snapshot.params['id'])
        this.getLoan()
    }

    protected calculate() {
        if(this.loan !== undefined) {
            this.loanApiService.calculate(this.loan).then(() => alert("Calculation finished"))
            this.getLoan();
        }
    }

    protected getLoan() {
        this.loanApiService.getLoan(this.loanId)
            .then(loan => this.loan = loan)
            .finally(() => console.log("Loan {} retrieved", this.loanId))
    }

}