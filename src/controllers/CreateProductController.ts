import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class CreateProductController {
  async handler(request: Request, response: Response) {
    const { name, bar_code, value } = request.body;
    const product = await prismaClient.product.create({
      data: { bar_code: bar_code, name: name, value: value },
    });
    return response.json(product);
  }
}
