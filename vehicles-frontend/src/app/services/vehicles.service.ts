import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { RequestModule } from './requestModule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private request: RequestModule) {}

  findAll(): Observable<Vehicle[]> {
    return this.request.doRequest<Vehicle[]>('get', '');
  }

  create(vehicle: Vehicle): Observable<Vehicle> {
    return this.request.doRequest<Vehicle>('post', '', vehicle);
  }

  update(vehicle: Vehicle): Observable<Vehicle> {
    return this.request.doRequest<Vehicle>('patch', `/${vehicle.id}`, vehicle);
  }

  delete(vehicle: Vehicle): Observable<Vehicle> {
    return this.request.doRequest<Vehicle>('delete', `/${vehicle.id}`);
  }
}
