import { repository } from '@loopback/repository';
import { post, get, requestBody, HttpErrors, param } from '@loopback/rest';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/user';
import { Login } from '../models/login';
import { sign, verify } from 'jsonwebtoken';

export class UserController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository,
  ) {}

  @post('/registration')
  async createUser(@requestBody() user: User) {
    return await this.userRepo.create(user);
  }

  @post('/login')
  async login(@requestBody() login: Login): Promise<any> {
    var users = await this.userRepo.find();

    var email = login.email;
    var password = login.password;

    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.email == email && user.password == password) {
        var jwt = sign(
          {
            user: user,
          },
          'shh',
          {
            issuer: 'auth.ix.co.za',
            audience: 'ix.co.za',
          },
        );

        return {
          token: jwt,
        };
      }
    }

    throw new HttpErrors.NotFound('User not found, sorry!');
  }

  @post('/login-with-query')
  async loginWithQuery(@requestBody() login: Login): Promise<User> {
    var users = await this.userRepo.find({
      where: {
        and: [{email: login.email}, {password: login.password}],
      },
    });

    if (users.length == 0) {
      throw new HttpErrors.NotFound('User not found, sorry!');
    }

    return users[0];
  }

  @get('/users')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }

  @get('/users/{id}')
  async getUserById(@param.query.number('id') id: number): Promise<User> {
    try {
      return await this.userRepo.findById(id);
    } catch (err) {
      throw new HttpErrors.NotFound('User not found, sorry!');
    }
  }
}