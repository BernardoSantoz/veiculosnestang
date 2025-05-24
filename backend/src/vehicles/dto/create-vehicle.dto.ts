import {IsInt, IsString, Max, Min } from "class-validator";

export class CreateVehicleDto {
    @IsString()
    placa: string;
    @IsString()
    chassi: string;
    @IsString()
    renavam: string;
    @IsString()
    modelo: string;
    @IsString()
    marca: string;
    @IsInt()
    @Min(1886) // primeiro carro da história
    @Max(new Date().getFullYear() + 1) // até o ano que vem no máximo
    ano: number;
}
