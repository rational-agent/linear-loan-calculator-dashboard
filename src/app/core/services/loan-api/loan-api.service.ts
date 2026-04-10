import {Loan} from "../../model/loan";
import {HttpClient} from "@angular/common/http";
import {CreateLoanDto} from "./create-loan-dto";
import {Injectable} from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LoanApiService {

    private readonly baseUrl = 'http://localhost:8080/loans';

    constructor(private http: HttpClient) {
    }

    createLoan(dto: CreateLoanDto) {
        this.http.post<Loan>(this.baseUrl, dto)
            .subscribe({
                next: loan => {
                    console.log("Creating new loan with id: " + loan.id)
                },
                error: err => console.error(err),
                complete: () => alert('New loan created')
            });
    }

}