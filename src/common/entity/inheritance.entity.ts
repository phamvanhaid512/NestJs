import { Column, Entity } from "cassandra-orm4nest";
import { Timestamp } from "typeorm";
@Entity({
    keyspace: 'test',
    table: 'inheritance',
})
export class Inheritance {
    @Column()
    id: number
    @Column()
    status: number
    @Column()
    created_at: Timestamp
    @Column()
    created_by: Timestamp
    @Column()
    update_at: Timestamp
    @Column()
    update_by: Timestamp
}