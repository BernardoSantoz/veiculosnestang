import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.less']
})
export class VehicleFormComponent {
  @Input() vehicle: any = null;
  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<any>();
  @Output() deleted = new EventEmitter<any>();

  close() {
    this.closed.emit();
  }

  save() {
    this.saved.emit(this.vehicle);
    this.close();
  }
  delete() {
    this.deleted.emit(this.vehicle);
    this.close();
  }
}

