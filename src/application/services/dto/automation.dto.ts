import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { BaseDTO } from "./base.dto";

export class AutomationDTO extends BaseDTO {
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    @ApiProperty({description: 'name field.', required: false})
    name: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    @ApiProperty({description: 'description field.', required: false})
    description: string;

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty({description: 'active field.', required: false})
    active: boolean;

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    @ApiProperty({description: 'createBy field.', required: false})
    createdBy: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    @ApiProperty({description: 'updatedBy field.', required: false})
    updatedBy: string;

    @IsNotEmpty()
    @IsInt()
    @ApiProperty({description: 'companyId field.', required: false})
    companyId: number;

    @IsNotEmpty()
    @IsInt()
    @ApiProperty({description: 'entityId field.', required: false})
    entityId: number;

    @IsNotEmpty()
    @IsInt()
    @ApiProperty({description: 'userId field.', required: false})
    userId: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    @ApiProperty({description: 'gmt field.', required: false})
    gmt: string;
}