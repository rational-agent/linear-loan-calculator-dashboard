import {ChangeDetectorRef, Component} from '@angular/core';
import {Loan} from 'src/app/core/model/loan';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {LoanService} from "../../core/services/loan/loan.service";
import {AlertService} from "../../shared/services/alert.service";

@Component({
    selector: 'loan-details',
    imports: [FormsModule],
    templateUrl: './loan-details.component.html',
    styleUrls: ['./loan-details.component.css'],
})
export class LoanDetails {
    loanId = 0
    loan: Loan | undefined
    calculating = false;

    constructor(private loanApiService: LoanService, private route: ActivatedRoute, private ref: ChangeDetectorRef, private alertService: AlertService) {
        this.loanId = Number(this.route.snapshot.params['id'])
        this.getLoan()
    }

    protected calculate() {
        if (this.loan !== undefined) {
            this.calculating = true;
            this.loanApiService.calculate(this.loan)
                .then(() => this.alertService.show("Calculation finished"))
                .then(() => this.calculating = false)
                .finally(() => this.getLoan())
        }
    }

    private getLoan() {
        this.loanApiService.getLoan(this.loanId)
            .then(loan => this.loan = loan)
            .finally(() => this.ref.detectChanges());
    }

}