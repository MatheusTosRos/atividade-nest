import { IsNumber, IsString, Max, MaxLength, Min, MinLength, IsInt } from 'class-validator';

export class CreateProdutoDto {
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    nome: string;
  
    @IsNumber()
    @Min(0)
    @Max(1000)
    valor: number;
    
    @IsInt()
    @Min(0)
    @Max(100)
    quantidade: number;
}