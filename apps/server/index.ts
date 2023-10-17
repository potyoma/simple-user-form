import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getUsers } from "./data/get-users";
import { ValidationError } from "./models/validation-error";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.get("/api/users", (req: Request, res: Response) => {
  const { email, number } = req.query as { email: string; number?: string };

  if (!email) {
    res.status(400).json({ error: "Email is required" } as ValidationError);
    return;
  }

  const users = getUsers({ email, number });
  res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
