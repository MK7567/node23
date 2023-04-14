import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "../entities/user.entity";
import {CreateUserDto} from "./dto/create-user.dto";
import * as path from "path";
import {DeleteResult} from "typeorm";
import {UpdateUserDto} from "./dto/update-user.dto";

@Controller('users')
export class UserController {
    constructor(
        private readonly userSetvice: UserService
    ) {
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userSetvice.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<User>{
        return this.userSetvice.findById(id);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userSetvice.create(createUserDto);
    }

    @Delete(':id')
    async delete(@Param('id') id:number): Promise<DeleteResult> {
        return this.userSetvice.delete(id);
    }

    @Patch(':id')
    async update(@Param('id') id:number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.userSetvice.update(id, updateUserDto);
    }

}
