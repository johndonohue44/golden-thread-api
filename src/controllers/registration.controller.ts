import { repository } from "@loopback/repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user"
import { UserRepository } from "../repositories/user.repository";

export class RegistrationController {

    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository
    ) { }

    @post('/registration')
    async createUser(@requestBody() user: User) {
        return await this.userRepo.create(user);
    }
}