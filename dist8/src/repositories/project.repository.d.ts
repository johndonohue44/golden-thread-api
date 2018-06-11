import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { PaymentMethod } from '../models/payment-method';
import { Project } from "../models/project";
export declare class ProjectRepository extends DefaultCrudRepository<Project, typeof PaymentMethod.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
