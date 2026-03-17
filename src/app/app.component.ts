import {Component} from '@angular/core';
import { Loan } from './loan';
import { NavBar } from './navbar/navbar.component'

@Component({
  selector: 'app-root',
  imports: [NavBar],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class App {

  readonly ROOT_URL = 'http://localhost:8080';

  loans: Loan[] = [];

  constructor() {
    this.getLoans().then((loans: Loan[]) => {
      this.loans = loans;
    });
  };

  async getLoans(): Promise<Loan[]> {
    console.log("Get loans")
    const data = await fetch(this.ROOT_URL + "/loans");
    const json = await data.json() ?? []; 
    console.log(json)

    return json;
  }
}
