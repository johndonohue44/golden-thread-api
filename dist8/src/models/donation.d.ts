import { Entity } from '@loopback/repository';
export declare class Donation extends Entity {
    id?: number;
    amount: number;
    user: string;
    charity: string;
    getId(): number | undefined;
}
