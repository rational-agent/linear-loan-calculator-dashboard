import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from './alert.service';

@Component({
    selector: 'app-alert',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    alert$ = this.alertService.alert$;

    constructor(private alertService: AlertService) {}

    close(): void {
        this.alertService.hide();
    }
}
