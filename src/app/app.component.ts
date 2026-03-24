import { Component } from '@angular/core';
import { TopBar } from 'src/app/top-bar/top-bar.component'
import { LoanOverview } from "src/app/loan-overview/loan-overview.component";

@Component({
  selector: 'app-root',
  imports: [TopBar, LoanOverview],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class App {

}
