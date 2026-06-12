import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma";

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST || process.env.DATABASE_HOST || "localhost",
  user: process.env.DB_USER || process.env.DATABASE_USER || "root",
  password: process.env.DB_PASSWORD || process.env.DATABASE_PASSWORD,
  database: process.env.DB_NAME || process.env.DATABASE_NAME,
  port: Number(process.env.DB_PORT || process.env.DATABASE_PORT || 3306),
  connectTimeout: 5000,
});

export const prisma = new PrismaClient({ adapter });
