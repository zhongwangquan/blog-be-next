import { InputType, Field } from 'type-graphql'
import { IsString, IsNotEmpty, IsUrl } from 'class-validator'

@InputType()
export class CreateBestAlbumInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  public readonly title: string

  @Field()
  @IsString()
  @IsNotEmpty()
  public readonly artist: string

  @Field()
  @IsUrl()
  @IsNotEmpty()
  public readonly coverUrl: string

  @Field()
  @IsUrl()
  @IsNotEmpty()
  public readonly mvUrl: string

  @Field()
  @IsString()
  @IsNotEmpty()
  public readonly releaseDate: string
}