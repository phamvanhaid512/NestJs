import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class Inheritance {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    email:string;
    @Column()
    adress:string;
    @Column()
    phone:number;
    @Column()
    status:number
}