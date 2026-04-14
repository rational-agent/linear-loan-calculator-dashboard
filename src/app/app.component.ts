import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Header } from './layout/header/header.component'
import { FooterComponent } from "./layout/footer/footer.component";
import { AlertComponent } from './shared/services/alert.component';

@Component({
  selector: 'app-root',
  imports: [Header, RouterModule, FooterComponent, AlertComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class App {

}
