import { Timestamp } from "typeorm";
export class Inheritance {
    status: number;
    created_at: Date; // Sử dụng kiểu Date thay vì timestamp
    create_by: Date;
    update_at: Date;
    update_by: Date;
}
