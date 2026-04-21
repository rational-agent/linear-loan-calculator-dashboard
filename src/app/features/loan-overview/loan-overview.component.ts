import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Loan} from 'src/app/core/model/loan';
import {FormsModule} from "@angular/forms";
import {LoanService} from "../../core/services/loan/loan.service";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'loan-overview',
    imports: [FormsModule, RouterLink],
    templateUrl: './loan-overview.component.html',
    styleUrls: ['./loan-overview.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoanOverview {

    loading = false;

    protected loans: Loan[] = [];

    constructor(private loanService: LoanService, private ref: ChangeDetectorRef) {
        this.getLoans();
    }

    protected getLoans() {
        this.loading = true;
        this.loanService.getLoans()
            .then((loans: Loan[]) => this.loans = loans)
            .finally(() => {
                this.loading = false
                this.ref.detectChanges()
            });
    }

    protected delete(loan: Loan) {
        this.loanService.delete(loan)
            .then(() => this.getLoans());
    }
}
