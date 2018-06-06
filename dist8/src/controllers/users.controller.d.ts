import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
export declare class UserController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    getDonationsByUserId(userId: number, dateFrom: Date, authorizationToken: String): Promise<void>;
    findUsers(): Promise<User[]>;
    findUsersById(id: number): Promise<User>;
}
