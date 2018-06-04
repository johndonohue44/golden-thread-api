import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
export declare class UsersController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(): Promise<Array<User>>;
    getAllUsersByID(): Promise<Array<User>>;
}
