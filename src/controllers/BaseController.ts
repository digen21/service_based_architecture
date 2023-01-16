import BaseService from "../services/BaseService";
import { Request, Response } from 'express';

class BaseController {
    private _service: BaseService;
    constructor(service: BaseService) {
        console.log(service);

        this._service = service;
    }

    create = async (req: Request, res: Response) => {
        console.log("Controller : ", req.body);
        const data = await this._service.create(req.body);
        res.send(data)
    }


}


export default BaseController;