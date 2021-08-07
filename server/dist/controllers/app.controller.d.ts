import { AppService } from '../services/app.service';
import { Request } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getBlcoksInfo(request: Request): Promise<any>;
}
