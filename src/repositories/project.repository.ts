import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Donation } from '../models/donation';
import { PaymentMethod } from '../models/payment-method';
import { Project } from "../models/project";

export class ProjectRepository extends DefaultCrudRepository<
    Project,
    typeof PaymentMethod.prototype.id
    > {
    constructor(@inject('datasources.db') protected datasource: DataSource) {
        super(Project, datasource);
    }
}