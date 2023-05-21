import {TaskStatus} from "../task.entity";
import {IsIn, IsNotEmpty, IsOptional, IsString, MinLength} from "class-validator";

export class CreateTaskDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  readonly title: string;

  @IsString()
  readonly description: string;
}

export class UpdateTaskDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @IsOptional()
  readonly title?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsString()
  @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  @IsOptional()
  readonly status?: TaskStatus;
}
