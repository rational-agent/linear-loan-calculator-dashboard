import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NavBar } from './nav-bar/nav-bar.component'
import { CreateLoan } from "./create-loan/create-loan.component";
import { LoanOverview } from "./loan-overview/loan-overview.component";

@Component({
  selector: 'app-root',
  imports: [NavBar, CreateLoan, LoanOverview, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class App {

}
