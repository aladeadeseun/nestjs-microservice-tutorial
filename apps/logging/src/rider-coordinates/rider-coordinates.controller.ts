/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinateDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {

    constructor(
        private readonly riderCoordinateService:RiderCoordinatesService
    ){}

    @Get()
    getRiderCoordinates(){
        return "Hello I am from rider coordinates"
    }

    @Post()
    saveRiderCoordinates(@Body() coordinateDTO:CreateCoordinateDTO){
        return coordinateDTO
    }
}