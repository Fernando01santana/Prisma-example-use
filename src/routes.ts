import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductWithCategoryController } from "./controllers/CreateProductWithCategory";

const router = Router();
const createProductController = new CreateProductController();
const createCategoryController = new CreateCategoryController();
const createProductCategoryController = new CreateProductCategoryController();
const createProductWithCategory = new CreateProductWithCategoryController();

router.post("/product", createProductController.handler);
router.post("/category", createCategoryController.handler);
router.post("/product-category", createProductCategoryController.handler);
router.post("/product-with-category", createProductWithCategory.handler);
export { router };
