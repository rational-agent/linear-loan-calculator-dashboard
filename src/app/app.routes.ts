import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {CreateLoan} from "./features/create-loan/create-loan.component";
import {LoanOverview} from "./features/loan-overview/loan-overview.component";
import {LoanDetails} from "./features/loan-details/loan-details.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'create-loan',
        component: CreateLoan,
        title: 'Create Loan'
    },
    {
        path: 'loan-overview',
        component: LoanOverview,
        title: 'Loan Overview'
    },
    {
        path: 'loan-details/:id',
        component: LoanDetails,
        title: 'Loan Details'
    }
];

export default routeConfig;