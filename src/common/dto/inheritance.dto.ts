import { Timestamp } from "typeorm";
export class Inheritance {
    status: number;
    created_at: Timestamp; // Sử dụng kiểu Date thay vì timestamp
    create_by: Timestamp;
    update_at: Timestamp;
    update_by: Timestamp;
}
