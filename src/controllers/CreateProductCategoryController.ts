import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class CreateProductCategoryController {
  async handler(request: Request, response: Response) {
    const { id_product, id_category } = request.body;
    const product = await prismaClient.productCategory.create({
      data: { id_category: id_category, id_product: id_product },
    });
    return response.json(product);
  }
}
