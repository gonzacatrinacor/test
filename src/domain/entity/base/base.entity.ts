import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @CreateDateColumn({ nullable: true, name: 'created_at' })
    createdAt?: Date;

    @UpdateDateColumn({ nullable: true, name: 'updated_at' })
    updatedAt?: Date;

    @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
    deletedAt?: Date;
}