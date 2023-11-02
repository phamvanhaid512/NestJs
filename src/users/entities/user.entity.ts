import { Column, Entity } from "cassandra-orm4nest";
import { Inheritance } from '../../common/entity/inheritance.entity';
@Entity({
  keyspace: 'test',
  table: 'device'
})
export class User extends Inheritance {

  @Column()
  email: string;
  @Column()
  password: string;


}