import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from '../vehicle-form/vehicle-form.component';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule, VehicleFormComponent],
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.less']
})
export class VehicleListComponent {
  constructor(private vehiclesService: VehiclesService) {
    this.loadVehicles();
  }
  
  @Input() vehicles: any[] = [];

  selectedVehicle: any = null;
  
  loadVehicles() {
    this.vehiclesService.findAll().subscribe(data => {
      this.vehicles = data;
    });
  }

  selectVehicle(vehicle: any) {
    this.selectedVehicle = vehicle;
  }

  async handleSave (vehicle: any)  {
    this.vehiclesService.update(vehicle).subscribe({
      next: (response) => {
        console.log('Veículo atualizado:', response);
        this.loadVehicles();
      },
      error: (err) => {
        console.error('Erro ao atualizar veículo', err);
      }
    });

 
  }
  
  handleDelete (vehicle: any)  {
    this.vehiclesService.delete(vehicle).subscribe({
      next: (response) => {
        console.log('Veículo Deletado:', response);
        this.loadVehicles();
      },
      error: (err) => {
        console.error('Erro ao remover veículo', err);
      }
    });
  }
}
