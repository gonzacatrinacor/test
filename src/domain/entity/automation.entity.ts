import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base/base.entity";

@Entity('automation')
export class Automation extends BaseEntity {
    @Column({ name: 'name', length: 255 })
    name: string;

    @Column({ name: 'description', length: 255 })
    description: string;

    @Column({ type:'boolean', name: 'active', default: false })
    active: boolean;

    @Column({ name: 'created_by', length: 255 })
    createdBy: string;

    @Column({ name: 'updated_by', length: 255 })
    updatedBy: string;

    @Column({ name: 'company_id', nullable: false })
    companyId: number;

    @Column({ name: 'entity_id', nullable: false })
    entityId: number;

    @Column({ name: 'user_id', nullable: false })
    userId: number;

    @Column({ name: 'gmt', length: 255 })
    gmt: string;

}