import "dotenv/config";

function required(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const DB_USERNAME = required("DB_USERNAME");
export const DB_PORT = Number(required("DB_PORT"));
export const DB_TYPE = required("DB_TYPE");
export const DB_HOST = required("DB_HOST");
export const DB_PASSWORD = required("DB_PASSWORD");
export const DB_NAME = required("DB_NAME");
