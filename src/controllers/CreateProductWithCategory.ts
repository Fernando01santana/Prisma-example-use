import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class CreateProductWithCategoryController {
  async handler(request: Request, response: Response) {
    const { name, bar_code, value, id_category } = request.body;
    const product = await prismaClient.productCategory.create({
      data: {
        product: {
          create: {
            value: value,
            name: name,
            bar_code: bar_code,
          },
        },
        category: {
          connect: {
            id: id_category,
          },
        },
      },
    });
    return response.json(product);
  }
}
