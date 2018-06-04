import { repository } from "@loopback/repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";


export class UsersController {

    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository
    ) { }



    @get('/user')
    async getAllUsers(): Promise<Array<User>> {
        return await this.userRepo.find();
    }
    @get('/user')
    async getAllUsersByID(): Promise<Array<User>> {
        let alluser = await this.userRepo.find();
        var allUserIds = new Array();
        alluser.forEach(element => {
            allUserIds.push(element.getId());
        })
        return allUserIds;
    }
}