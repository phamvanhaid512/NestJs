import { Column, Entity, PrimaryGeneratedColumn , JoinColumn,OneToMany,BeforeInsert,ManyToOne} from 'typeorm';
import bcrypt from 'bcrypt'
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
export class User {
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
// pet.entity.ts
@Entity()
export class Pet {
  @PrimaryGeneratedColumn('uuid') id: number
  @Column() name: string
  @Column() age: number
  @ManyToOne((type) => User, (user) => user.pets)
  @JoinColumn({ name: 'user_id' })
  user: User
}