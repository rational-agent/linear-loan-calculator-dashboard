import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import {CreateLoanDto} from "../loan-api/create-loan-dto";
import {LoanApiService} from "../loan-api/loan-api.service";

@Component({
    selector: 'createLoan',
    imports: [FormsModule],
    templateUrl: './create-loan.component.html',
    styleUrls: ['./create-loan.component.css'],
})
export class CreateLoan {

    constructor(private apiService: LoanApiService) {}

    insertLoan(loanForm: NgForm) {
        const dto: CreateLoanDto = {
            principal: loanForm.value.principal,
            interestRate: loanForm.value.interestRate,
            startDate: loanForm.value.startDate,
            endDate: loanForm.value.endDate,
            payDay: 25
        };

        this.apiService.createLoan(dto);
    }


}
