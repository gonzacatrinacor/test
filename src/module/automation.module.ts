import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AutomationController } from "src/application/controllers/automation.controller";
import { AutomationService } from "src/application/services/automation.service";
import { Automation } from "src/domain/entity/automation.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Automation])],
    controllers: [AutomationController],
    providers: [AutomationService],
    exports: [AutomationService],
})

export class AutomationModule {}