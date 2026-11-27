import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URI as string);
const db = client.db("mentor-lagbe");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: false,
                defaultValue: "student",
                input: true,
            },
            plan: {
                type: "string",
                required: false,
                defaultValue: "free",
                input: true,
            },
        },
    },
    database: mongodbAdapter(db, {
        client,
    }),
});