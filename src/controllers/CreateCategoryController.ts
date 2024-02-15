import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class CreateCategoryController {
  async handler(request: Request, response: Response) {
    const { name } = request.body;
    const product = await prismaClient.category.create({
      data: { name: name },
    });
    return response.json(product);
  }
}
