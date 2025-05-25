import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private baseUrl = 'http://localhost:3000/vehicles';

  constructor(private http: HttpClient) { }

  findAll () {
    return this.http.get<Vehicle[]>(`${this.baseUrl}`);
  }
  update(vehicle: Vehicle) {    
    return this.http.patch<Vehicle>(`${this.baseUrl}/${vehicle.id}`, vehicle);
  }
  create(vehicle: Vehicle) {    
    return this.http.post<Vehicle>(`${this.baseUrl}/`, vehicle);
  }
  delete(vehicle: Vehicle) {
    return this.http.delete<Vehicle>(`${this.baseUrl}/${vehicle.id}`, {});
  }
}
