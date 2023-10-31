import { MigrationInterface, QueryRunner ,Table,TableColumn} from "typeorm"

export class Vasdsd1698722767660 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(
        //    `CREATE TABLE Person (
        //     PersonID int,
        //     Email varchar(255),
        //     FirstName varchar(255),
        //     Address varchar(255),
        //     City varchar(255)    
        //     );
        await queryRunner.addColumn('vanhai',new TableColumn({
            name: 'new_column',
            type: 'int'
        }));
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
     
    }

}
