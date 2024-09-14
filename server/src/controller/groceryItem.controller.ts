import { Response } from "express";
import HttpStatusCodes from "http-status-codes";

import { Request } from "../interface/auth.interface";
import * as itemService from "../service/grocery.services";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/response";

// controller function to add a new item.
export const addItem = asyncHandler((req: Request, res: Response) => {
    const { body } = req;

    const message = itemService.addItem(body);
    res.json(message);
});

// controller function to add a new item.
export const getAllItems = asyncHandler(async (req: Request, res: Response) => {
    const message = await itemService.getAllItems();
    res.json(message);
});

// controller function to update item
export const updateItem = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const expense = req.body;
    const message = await itemService.updateItem(id, expense);

    res.status(HttpStatusCodes.OK).json(new ApiResponse(HttpStatusCodes.OK, message));
});


// delete expense
export const deleteItem = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const message = await itemService.deleteItem(id);
    res.status(HttpStatusCodes.OK).json(new ApiResponse(HttpStatusCodes.OK, message));
});