import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Header } from './layout/header/header.component'
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [Header, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class App {

}
