import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { NextFunction, Request, Response } from "express";
import dataResponse from "../response/dataResponse";

export const validationMw = (dtoClass: any) => {
    return function (req: Request, res: Response, next: NextFunction) {
        const output: any = plainToInstance(dtoClass, req.body);
        validate(output, { skipMissingProperties: true }).then(errors => {
            if (errors.length > 0) {
                let errorTexts = Array();
                for (const errorItem of errors) {
                    errorTexts.push({ field: errorItem.property, errors: errorItem.constraints })
                }
                res.status(400).send(new dataResponse("Hatalı istek",false,errorTexts));
                return;
            } else {
                res.locals.input = output;
                next();
            }
        });
    };
};