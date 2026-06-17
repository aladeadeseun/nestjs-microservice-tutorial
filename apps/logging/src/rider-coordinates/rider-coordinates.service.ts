/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { CreateCoordinateDTO } from './dto/create-coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate, RiderCoordinateDocument } from './schema/rider-coordinates.schema';
import { Model } from 'mongoose';

@Injectable()
export class RiderCoordinatesService {
    
    constructor(
        @InjectModel(RiderCoordinate.name,)
        private readonly riderCoordinateModel: Model<RiderCoordinateDocument>
    ){}

    saveRiderCoordinate(createCoordinateDTO: CreateCoordinateDTO){
        
    }
}
