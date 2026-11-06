import { Automation } from "src/domain/entity/automation.entity";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(Automation)
export class AutomationRepository extends Repository<Automation> {}