import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreatePlayerInput } from './dtos/create-player.input'
import { UpdatePlayerInput } from './dtos/update-player.input'
import { PlayerModel } from './models/player.model'
import { Player } from './interfaces/player.interface'
import { BatchDeleteModel } from '../database/models/database.model'

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel('Player')
    private readonly playerModel: Model<Player>,
  ) {
    this.playerModel = playerModel
  }

  public async findAll(): Promise<PlayerModel[]> {
    return this.playerModel.find({}).sort({ updatedAt: -1 })
  }

  public async findOneById(id: string): Promise<PlayerModel> {
    return this.playerModel.findById(id)
  }

  public async create(playerInput: CreatePlayerInput): Promise<PlayerModel> {
    return this.playerModel.create(playerInput)
  }

  public async update(playerInput: UpdatePlayerInput): Promise<PlayerModel> {
    const { id, ...rest } = playerInput
    return this.playerModel.findByIdAndUpdate(id, rest, { new: true })
  }

  public async deleteOneById(id: string): Promise<PlayerModel> {
    return this.playerModel.findByIdAndDelete(id)
  }

  public async batchDelete(ids: string[]): Promise<BatchDeleteModel> {
    return this.playerModel.deleteMany({
      _id: { $in: ids },
    })
  }
}
