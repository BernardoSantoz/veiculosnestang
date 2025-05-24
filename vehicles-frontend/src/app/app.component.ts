import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, VehicleListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  vehicles: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
