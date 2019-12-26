import { Document } from 'mongoose'

export interface LiveTour extends Document {
  readonly title: string
  readonly posterUrl: string
  readonly showTime: string
  readonly createdAt: string
  readonly updatedAt: string
}
