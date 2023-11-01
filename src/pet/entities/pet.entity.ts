import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, BeforeInsert, ManyToOne } from 'typeorm';
import bcrypt from 'bcrypt'
import { Inheritance } from '../../common/entity/inheritance.entity';
import { User } from 'src/users/entities/user.entity';
// pet.entity.ts
@Entity()
export class Pet extends Inheritance {
  @PrimaryGeneratedColumn('uuid') id: number
  @Column() name: string
  @Column() age: number
  @ManyToOne((type) => User, (user) => user.pets)
  @JoinColumn({ name: 'user_id' })
  user: User
}