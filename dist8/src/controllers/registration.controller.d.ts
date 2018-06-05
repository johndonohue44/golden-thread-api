import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
export declare class RegistrationController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    registerUser(user: User): Promise<User>;
}
