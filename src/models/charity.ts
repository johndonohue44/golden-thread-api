import { Entity, property, model } from '@loopback/repository';

@model({
    name: "charity"
})
export class Charity extends Entity {

    @property({
        type: 'number',
        id: true,
    })
    id?: number;
    @property({
        type: 'string',
    })
    charityname: number;

    @property({
        type: 'string',
        required: true,
    })
    charityemail: string;

    @property({
        type: 'string',
        required: true,
    })
    password: string;

    getId() {
        return this.id;
    }
}