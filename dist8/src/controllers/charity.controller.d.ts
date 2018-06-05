import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";
export declare class CharityController {
    protected charityRepo: CharityRepository;
    constructor(charityRepo: CharityRepository);
    findCharities(): Promise<Charity[]>;
    findUsersById(id: number): Promise<Charity>;
}
