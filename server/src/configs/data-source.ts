import { DataSource } from "typeorm";
import * as env from "./env.ts";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});

export const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log("-- db connect successe --");
  } catch (error) {
    console.log("----- db connect unsuccess ---", error);
  }
};
