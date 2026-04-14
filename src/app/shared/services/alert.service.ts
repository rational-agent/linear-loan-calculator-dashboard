import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AlertOptions {
    message: string;
    title?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    private alertSubject = new BehaviorSubject<AlertOptions | null>(null);
    alert$ = this.alertSubject.asObservable();

    public show(message: string, title: string = 'Notice'): void {
        this.alertSubject.next({ message, title });
    }

    public hide(): void {
        this.alertSubject.next(null);
    }
}
