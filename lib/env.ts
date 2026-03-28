function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const mongodbUri = process.env.MONGODB_URI || process.env.MONGO_URI || "";
export const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME || "";
export const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY || "";
export const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET || "";
export const adminPassword = process.env.ADMIN_PASSWORD || "tirupati123";

export const isProduction = process.env.NODE_ENV === "production";

export function validateEnv() {
  const errors: string[] = [];

  if (!mongodbUri) {
    errors.push("MONGODB_URI is not set");
  }

  if (isProduction) {
    if (!cloudinaryCloudName) errors.push("CLOUDINARY_CLOUD_NAME is not set");
    if (!cloudinaryApiKey) errors.push("CLOUDINARY_API_KEY is not set");
    if (!cloudinaryApiSecret) errors.push("CLOUDINARY_API_SECRET is not set");
  }

  if (errors.length > 0) {
    console.warn("Environment validation warnings:", errors);
  }

  return true;
}