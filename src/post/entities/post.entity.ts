import { Column, Entity } from "cassandra-orm4nest";
import { Inheritance } from '../../common/entity/inheritance.entity';

export class Post extends Inheritance {
    @Column()
    title:string;
    @Column()
    name:string;
    @Column()
    logo:string;
    @Column()
    content:string;

}