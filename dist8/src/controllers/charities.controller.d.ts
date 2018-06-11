import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";
import { Project } from "../models/project";
import { ProjectRepository } from "../repositories/project.repository";
export declare class CharitiesController {
    private charityRepo;
    private projectRepo;
    constructor(charityRepo: CharityRepository, projectRepo: ProjectRepository);
    getCharitiesList(): Promise<Array<Charity>>;
    getCharityByID(id: number): Promise<Charity>;
    getAllCharityProjects(id: number): Promise<Array<Project>>;
    getCharityProjectByID(id: number): Promise<Project>;
    getCharityProjectPosts(): Promise<void>;
}
