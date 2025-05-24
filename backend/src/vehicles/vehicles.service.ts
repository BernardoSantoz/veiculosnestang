import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './vehicle.interface';

// Dados carregados apenas na inicialização, manipulados em memória
import vehiclesData from './entities/vehicles.json';

@Injectable()
export class VehiclesService {
  private vehicles: Vehicle[] = [];

  constructor() {
    this.vehicles = vehiclesData;
  }

  /**
   * Cria um novo veículo e retorna o objeto criado
   */
  create(createVehicleDto: CreateVehicleDto): Vehicle {
    const newId = this.vehicles.length > 0
      ? Math.max(...this.vehicles.map(v => v.id)) + 1
      : 1;

    const newVehicle: Vehicle = {
      id: newId,
      ...createVehicleDto,
    };

    this.vehicles.push(newVehicle);
    return newVehicle;
  }

  /**
   * Retorna todos os veículos
   */
  findAll(): Vehicle[] {
    return this.vehicles;
  }

  /**
   * Retorna um veículo pelo id, ou lança NotFoundException
   */
  findOne(id: number): Vehicle {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (!vehicle) {
      throw new NotFoundException(`Vehicle with id ${id} not found`);
    }
    return vehicle;
  }

  /**
   * Atualiza um veículo existente e retorna o veículo atualizado
   * Lança NotFoundException se o veículo não existir
   */
  update(id: number, updateVehicleDto: UpdateVehicleDto): Vehicle {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index === -1) {
      throw new NotFoundException(`Vehicle with id ${id} not found`);
    }

    this.vehicles[index] = {
      ...this.vehicles[index],
      ...updateVehicleDto,
    };

    return this.vehicles[index];
  }

  /**
   * Remove um veículo pelo id
   * Lança NotFoundException se o veículo não existir
   * Retorna o veículo removido
   */
  remove(id: number): Vehicle {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index === -1) {
      throw new NotFoundException(`Vehicle with id ${id} not found`);
    }

    const [removedVehicle] = this.vehicles.splice(index, 1);
    return removedVehicle;
  }
}
