import { Entity } from '@loopback/repository';
export declare class Charity extends Entity {
    id?: number;
    charityname: number;
    charityemail: string;
    password: string;
    getId(): number | undefined;
}
