import { Column, Entity, PrimaryGeneratedColumn , JoinColumn,OneToMany,BeforeInsert,ManyToOne} from 'typeorm';
import bcrypt from 'bcrypt'
import { Inheritance } from '../../common/entity/inheritance.entity';
import { Pet } from 'src/pet/entities/pet.entity';
// @Entity({name:'user'})

// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;
//   @Column()
//   name: string;
//   @Column()
//   email:string;
//   @Column()
//   age:number;
//   @Column()
//   orig_number:string
//   @Column()
//   adress:string;
// }
@Entity()
export class User extends Inheritance {
  @PrimaryGeneratedColumn('uuid') id: number
  @Column({ nullable: true }) name: string
  @Column({ type: 'varchar', length: 100, nullable: false }) password: string
  @OneToMany((type) => Pet, (pet) => pet.user) pets: Pet[]

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(password || this.password, salt)
  }
}
