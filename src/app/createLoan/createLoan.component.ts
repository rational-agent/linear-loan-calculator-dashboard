import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from "@angular/forms";
import { Loan } from "../loan";
import { App } from "../app.component";

@Component({
    selector: 'createLoan',
    imports: [FormsModule],
    templateUrl: './createLoan.component.html',
    styleUrls: ['./createLoan.component.css'],
})
export class CreateLoan {

    readonly ROOT_URL = 'http://localhost:8080';

    constructor(private http: HttpClient, private app: App) {}

    insertLoan(loanForm: NgForm) {
        const data = {
            principal: loanForm.value.principal,
            interestRate: loanForm.value.interestRate,
            startDate: loanForm.value.startDate,
            endDate: loanForm.value.endDate,
            payDay: 25
        };

        this.http.post<Loan>(this.ROOT_URL + "/loans", data)
            .subscribe((loan) => {
                console.log('New loan created:', loan.id);
            });

    }


}
