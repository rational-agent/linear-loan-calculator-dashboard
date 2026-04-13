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

    protected loans: Loan[] = [];

    constructor(private loanService: LoanService, private ref: ChangeDetectorRef) {
        this.getLoans();
    }

    protected getLoans() {
        this.loanService.getLoans()
            .then((loans: Loan[]) => this.loans = loans)
            .finally(() => this.ref.detectChanges());
    }

    protected delete(loan: Loan) {
        this.loanService.delete(loan)
            .then(() => this.getLoans());
    }
}
