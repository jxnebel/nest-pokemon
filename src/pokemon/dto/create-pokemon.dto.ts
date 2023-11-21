import { IsInt, Min, IsPositive, MinLength, IsString } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  @IsString()
  @MinLength(4)
  name: string;
}
