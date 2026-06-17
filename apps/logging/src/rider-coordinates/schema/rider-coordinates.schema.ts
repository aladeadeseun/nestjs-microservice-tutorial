/* eslint-disable prettier/prettier */

import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RiderCoordinateDocument = HydratedDocument<RiderCoordinate>;

@Schema()
export class RiderCoordinate{
    @Prop({required:true})
    lat!:number;

    @Prop({ required : true})
    lng!: number

    @Prop({ required: true})
    rider!: string
}

export const RiderCoordinateSchema = SchemaFactory.createForClass(RiderCoordinate)