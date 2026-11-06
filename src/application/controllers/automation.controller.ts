import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { Automation } from "src/domain/entity/automation.entity";
import { AutomationService } from "../services/automation.service";
import { AutomationDTO } from "../services/dto/automation.dto";
import { Mapper } from "../services/mapper/generic.mapper";

@Controller('/automations')
export class AutomationController {
    logger = new Logger('AutomationController.');

    constructor(private readonly automationService: AutomationService) {

    }

    @Get('/')
    @ApiResponse({
        status: 200,
        description: 'List automations',
        type: AutomationDTO,
    })
    async getAutomations():Promise<AutomationDTO[]> {
        this.logger.log('getAutomations method.');
        const serviceResult = await this.automationService.getAutomations();
        this.logger.log(`This is what service retrieved: ${JSON.stringify(serviceResult)}`);

        return serviceResult;
    }

    @Get('/:id')
    @ApiResponse({
        status: 200,
        description: 'Get automation by id',
        type: AutomationDTO,
    })
    async getAutomation(id: number):Promise<AutomationDTO> {
        this.logger.log('getAutomation service.');
        const serviceResult = await this.automationService.getAutomationById(id);

        return serviceResult;
    }

    @Post('/create')
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: AutomationDTO,
    })
    @ApiResponse({
        status: 403,
        description: 'Forbidden',  
    })
    async createAutomation(@Body() automationDTO: AutomationDTO):Promise<AutomationDTO> {

        // Check params
        if(!automationDTO) {
            return null;
        }

        const serviceResult = await this.automationService.createAutomation(automationDTO);

        return serviceResult;
    }

    @Post('/massiveCreate')
    @ApiResponse({
        status: 201,
        description: 'Records have been successfully created.',
        type: AutomationDTO,
    })
    @ApiResponse({
        status: 403,
        description: 'Forbidden',  
    })
    async createAutomations(@Body() automationsDTO: AutomationDTO[]): Promise<AutomationDTO> {
        // Check params
        if(!automationsDTO) {
            return null;
        }

        const serviceResult = await this.automationService.createAutomations(automationsDTO);

        return serviceResult;
    }

    @Put('/update')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: AutomationDTO,
    })
    async updateAutomation(@Body() automationDTO: AutomationDTO):Promise<AutomationDTO> {
        if (!automationDTO) {
            return null;
        }

        const serviceResult = await this.automationService.updateAutomation(automationDTO);

        return serviceResult;
    }

    @Delete('/delete')
    @ApiResponse({ status: 204, description: 'The record has been successfully deleted.' })
    async deleteAutomation(@Param('id') id: number) {
        return await this.automationService.deleteAutomation(id);
    }
}