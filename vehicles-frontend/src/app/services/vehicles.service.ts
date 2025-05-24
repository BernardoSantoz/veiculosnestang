import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  findAll () {
    return this.http.get<any[]>('http://localhost:3000/vehicles');
  }
  update(vehicle: any) {
    console.log(vehicle)
    return this.http.patch<any>(`http://localhost:3000/vehicles/${vehicle.id}`, vehicle);
  }
  delete(vehicle: any) {
    return this.http.delete<any>(`http://localhost:3000/vehicles/${vehicle.id}`, {});
  }
}
