import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Automation } from "src/domain/entity/automation.entity";
import { AutomationRepository } from "src/infrastructure/repository/automation.repository";
import { Repository, ReturningStatementNotSupportedError, In } from "typeorm";
import { AutomationDTO } from "./dto/automation.dto";
import { Mapper } from "./mapper/generic.mapper";

@Injectable()
export class AutomationService {
    logger = new Logger('Automation service.')

    constructor(@InjectRepository(Automation) private readonly automationRepository: Repository<Automation>) {}

    async getAutomations():Promise<AutomationDTO[]> {
        this.logger.log('getAutomations from service.');

        let resultList = await this.automationRepository.find();
        const resultDTO:AutomationDTO[] = [];
        
        if (resultList) {
             resultList.forEach(aut => {
                resultDTO.push(Mapper.fromEntityToDTO(aut, AutomationDTO));
            });
        }

        return resultDTO;
    }

    async getAutomationById(id: number):Promise<AutomationDTO> {
        this.logger.log('getAutomationById from service.');
        const result = await this.automationRepository.findBy({id: id});

        return Mapper.fromEntityToDTO(result, AutomationDTO);
    }

    async createAutomation(automationDTO: AutomationDTO) {
        const automationEntity = Mapper.fromDTOtoEntity(automationDTO, Automation);

        const result = await this.automationRepository.save(automationEntity);

        return Mapper.fromEntityToDTO(result, AutomationDTO);
    }

    async createAutomations(automationsDTO: AutomationDTO[]) {

        const entityArr: Automation[] = [];
        automationsDTO.forEach( aut => {
            entityArr.push(Mapper.fromDTOtoEntity(aut, Automation));
        })

        this.logger.log(`this is entityArr: ${JSON.stringify(entityArr)}`);

        const result = await this.automationRepository.save(entityArr);

        return Mapper.fromEntityToDTO(result, AutomationDTO);
    }

    async updateAutomation(automationDTO: AutomationDTO) {
        const automationEntity = Mapper.fromDTOtoEntity(automationDTO, Automation);

        const result = await this.automationRepository.save(automationEntity);

        return Mapper.fromEntityToDTO(result, AutomationDTO);
    }

    async deleteAutomation(id: number) {
        await this.automationRepository.delete(id);

        const entityDeleted = await this.automationRepository.findOneBy({id: id});

        if(entityDeleted) {
            throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
        }

        return;
    }

}