import { Response } from "express";
import { Request } from "../interface/auth.interface";

import * as itemService from "../service/grocery.services";

// controller function to add a new item.
export function addItem(req: Request, res: Response) {
    const { body } = req;

    const message = itemService.addItem(body);
    res.json(message);
}
