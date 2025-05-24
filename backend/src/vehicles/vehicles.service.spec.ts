import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesService } from './vehicles.service';
import { NotFoundException } from '@nestjs/common';

describe('VehiclesService', () => {
  let service: VehiclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesService],
    }).compile();

    service = module.get<VehiclesService>(VehiclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all vehicles', () => {
    const vehicles = service.findAll();
    expect(Array.isArray(vehicles)).toBe(true);
  });

  it('should create a vehicle and assign an id', () => {
    const createDto = {
      placa: 'XYZ1234',
      chassi: '9BWZZZ377VT004251',
      renavam: '12345678900',
      modelo: 'Test',
      marca: 'TestMarca',
      ano: 2020,
    };
    const newVehicle = service.create(createDto);
    expect(newVehicle).toHaveProperty('id');
    expect(newVehicle.placa).toBe('XYZ1234');
  });

  it('should find one vehicle by id', () => {
    const vehicle = service.findOne(1);
    expect(vehicle).toBeDefined();
    expect(vehicle.id).toBe(1);
  });

  it('should throw NotFoundException when findOne with invalid id', () => {
    expect(() => service.findOne(999)).toThrow(NotFoundException);
  });

  it('should update a vehicle', () => {
    const updateDto = { modelo: 'UpdatedModel' };
    const updatedVehicle = service.update(1, updateDto);
    expect(updatedVehicle.modelo).toBe('UpdatedModel');
  });

  it('should throw NotFoundException when updating non-existing vehicle', () => {
    expect(() => service.update(999, { modelo: 'X' })).toThrow(NotFoundException);
  });

  it('should remove a vehicle', () => {
    const removedVehicle = service.remove(1);
    expect(removedVehicle).toHaveProperty('id', 1);
  });

  it('should throw NotFoundException when removing non-existing vehicle', () => {
    expect(() => service.remove(999)).toThrow(NotFoundException);
  });
});
