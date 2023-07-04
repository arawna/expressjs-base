import { Request, Response, Router } from "express";
import Nesne from "../nesne";
import dataResponse from "../core/response/dataResponse";
import { validationMw } from "../core/validation/validationMw";


const userController = Router();

userController.post("/login", validationMw(Nesne) , async (req: Request, res: Response) => {
    const body : Nesne = req.body;
    if(body.name === "admin" && body.password === "123456"){
      return res.json(new dataResponse("Giriş başarılı", true, {token:"asldkgjsg"}))
    }else {
      return res.status(401).json(new dataResponse("Kullanıcı adı yada şifre hatalı.", false, null))
    }
})

export default userController;