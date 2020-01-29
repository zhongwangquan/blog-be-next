import { Args, Query, Resolver, Mutation } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { LoginModel } from './models/login.model'
import { LoginInput } from './dtos/login.input'
import { RegisterInput } from './dtos/register.input'

@Resolver(() => LoginModel)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {
    this.authService = authService
  }

  @Query(() => LoginModel)
  public async login(@Args('input') input: LoginInput) {
    return this.authService.login(input)
  }

  @Mutation(() => LoginModel)
  public async register(@Args('input') input: RegisterInput) {
    return this.authService.register(input)
  }
}
