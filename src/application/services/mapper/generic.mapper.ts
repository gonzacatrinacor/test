import { Automation } from "src/domain/entity/automation.entity";
import { BaseEntity } from "src/domain/entity/base/base.entity";
import { AutomationDTO } from "../dto/automation.dto";
import { BaseDTO } from "../dto/base.dto";

export class Mapper{
    static fromDTOtoEntity<T, U>(entityDTO: T, BaseEntity: new() => U): U {
        if(!entityDTO) {
            return;
        }

        const entity = new BaseEntity();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach(field => {
            entity[field] = entityDTO[field];
        });

        return entity;
    }

    static fromEntityToDTO<T, U>(entity: U, BaseDTO: new () => T): T {
        if(!entity) {
            return;
        }

        const dto = new BaseDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            dto[field] = entity[field];
        });

        return dto;
    }
}