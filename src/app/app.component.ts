import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NavBar } from './nav-bar/nav-bar.component'
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavBar, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class App {

}
