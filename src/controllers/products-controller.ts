import { Request, Response } from "express";

class ProductsController {
  async index(request: Request, response: Response) {
    return response.json({ message: "ok" });
  }

  async create(request: Request, response: Response) {
    return response.status(201).json({ message: request.user?.role });
  }
}

export { ProductsController };
