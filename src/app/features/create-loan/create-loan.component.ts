import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { CreateLoanDto } from "../../core/model/create-loan-dto";
import { LoanService } from "../../core/services/loan/loan.service";
import {AlertService} from "../../shared/services/alert.service";

@Component({
    selector: 'createLoan',
    imports: [FormsModule],
    templateUrl: './create-loan.component.html',
    styleUrls: ['./create-loan.component.css'],
})
export class CreateLoan {

    constructor(private apiService: LoanService, private alertService: AlertService) {}

    insertLoan(loanForm: NgForm) {
        const dto: CreateLoanDto = {
            principal: loanForm.value.principal,
            interestRate: loanForm.value.interestRate,
            startDate: loanForm.value.startDate,
            endDate: loanForm.value.endDate,
            payDay: 25
        };

        this.apiService.createLoan(dto).then(() => this.alertService.show("Loan created"));
    }


}
