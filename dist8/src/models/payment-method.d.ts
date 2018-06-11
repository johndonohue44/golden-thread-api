import { Entity } from '@loopback/repository';
export declare class PaymentMethod extends Entity {
    id?: number;
    card: number;
    getId(): number | undefined;
}
