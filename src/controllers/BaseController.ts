// import BaseService from "../services/BaseService";
// import { Request, Response, response } from 'express';
// import { login } from "../graphql/user/login";
// class BaseController {
//     private _service: BaseService;
//     constructor(service: BaseService) {
//         this._service = service;
//     }

//     create = async (req: Request, res: Response) => {
//         console.log("Controller : ", req.body);
//         const response = await this._service.create(req.body);
//         res.status(200).send(response);
//     }

//     update = async (req: Request, res: Response) => {
//         const input = req.body;
//         const response = await this._service.update(input);
//         res.status(200).send(response);
//     }

//     delete = async (req: Request, res: Response) => {
//         const input = req.body;
//         const response = await this._service.delete(input);
//         res.status(200).send("Delete Successfully....");
//     }

//     findByEmail = async (req: Request, res: Response) => {
//         const { email, password } = req.body;
//         const response = await this._service.getByEmail(email);
//         res.status(200).send(response)

//     }

//     getById = async (req: Request, res: Response) => {
//         const data: any = req.params.id;
//         const response = await this._service.getById(data);
//         res.status(200).send(response)
//     }
// }


// export default BaseController;



// // console.log("Service : ", response);
// //         if (response) {
// //             const isMatch = await bcrypt.compare(password, response.password);
// //             if (isMatch) {
// //                 const token = jwt.sign({ userId: response.id }, "jwtsecret", { expiresIn: '24h' });
// //                 console.log(token);

// //             }
// //         }