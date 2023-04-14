import {IsEmail, isNotEmpty, IsNotEmpty, IsOptional} from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    first_name?: string;

    @IsOptional()
    last_name?: string;

}