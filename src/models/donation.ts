import { Entity, property, model } from '@loopback/repository';
import { Charity } from '../models/charity';
import { User } from '../models/user';
@model({
    name: "donation"
})
export class Donation extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'number',
        required: true
    })
    amount: number;

    @property({
        type: 'string',
        required: true
    })
    user: string;

    @property({
        type: 'string',
        required: true
    })
    charity: string;

    getId() {
        return this.id;
    }
}