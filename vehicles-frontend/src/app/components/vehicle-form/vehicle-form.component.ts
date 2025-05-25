import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.less']
})
export class VehicleFormComponent {
  @Input() vehicle: Vehicle | null = null;
  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<Vehicle>();
  @Output() deleted = new EventEmitter<Vehicle>();

  close() {
    this.closed.emit();
  }

  save() {
    if (this.vehicle) this.saved.emit(this.vehicle);
  }

  delete() {
    if (this.vehicle) this.deleted.emit(this.vehicle);
    this.close();
  }
}

