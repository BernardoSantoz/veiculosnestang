import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from '../vehicle-form/vehicle-form.component';
import { VehiclesService } from '../../services/vehicles.service';
import { Vehicle } from '../../models/vehicle.model';
import { Observable } from 'rxjs';


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
  
  @Input() vehicles: Vehicle[] = [];
  newEmptyVehicle(): Vehicle {
    return {
      modelo: '',
      marca: '',
      ano: 0,
      placa: '',
      chassi: '',
      renavam: ''
    };
  };
  selectedVehicle: Vehicle | null = null;
  notificationMessage: string | null = null;
  notificationStatus: string | null = null;

  private readonly NOTIFICATION_TIMEOUT = 8000;
  showMessage(message: string, status: string) {
    this.notificationMessage = message;
    this.notificationStatus = status;
    setTimeout(() => {
      this.notificationMessage = null
      this.notificationStatus = null
    }, this.NOTIFICATION_TIMEOUT);
  }

  loadVehicles() {
    this.vehiclesService.findAll().subscribe(data => {
      this.vehicles = data;
    });
  }

  selectVehicle(vehicle: Vehicle ) {
    this.selectedVehicle = vehicle;
  }

  handleRequest(
      observable$: Observable<any>,
      successMessage: string,
      errorMessage: string
    ) {
      observable$.subscribe({
        next: () => {
          this.showMessage(successMessage, 'success');
          this.loadVehicles();
          this.selectedVehicle = null;
        },
        error: (err) => {
          const errorMessages = err?.error?.message || errorMessage;
          this.showMessage(Array.isArray(errorMessages) ? errorMessages.join(', ') : errorMessages, 'error');
          console.error(err);
        }
      });
  }


  handleSave(vehicle: Vehicle) {
    if (vehicle.id) {
      this.handleRequest(
        this.vehiclesService.update(vehicle),
        'Veículo atualizado com sucesso!',
        'Erro ao atualizar veículo.'
      );
    } else {
      this.handleRequest(
        this.vehiclesService.create(vehicle),
        'Veículo criado com sucesso!',
        'Erro ao criar veículo.'
      );
    }
  }

  handleDelete(vehicle: Vehicle) {
    this.handleRequest(
      this.vehiclesService.delete(vehicle),
      'Veículo removido com sucesso!',
      'Erro ao remover veículo.'
    );
  }
}
