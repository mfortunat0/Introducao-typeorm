import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { User } from "../entity/User";

const index = async (req: Request, res: Response) => {
  return res.json(await getRepository(User).find());
};

const show = async (req: Request, res: Response) => {
  return res.json(await getRepository(User).findOne(req.params.id));
};

const create = async (req: Request, res: Response) => {
  const user = getRepository(User).create(req.body);
  const result = await getRepository(User).save(user);
  return res.json(result);
};

const update = async (req: Request, res: Response) => {
 const user = await getRepository(User).findOne(req.params.id);
 getRepository(User).merge(user, req.body);
 const results = await getRepository(User).save(user);
 return res.send(results);
}

const destroy = async (req: Request, res: Response) => {
  return res.json(await getRepository(User).delete(req.params.id));
};

export default { index, show, create, update, destroy };
