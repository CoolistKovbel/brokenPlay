import NextAuth from "next-auth";

declare module "next-auth" {

    interface User {
        username: string,
        eddress: string,
        userId: string,
        image: string,
    }

    interface Session {
        user: User & {
            username: string,
            eddress: string,
            userId: string,
            image: string
        }
        token: {
            username: string,
            eddress: string,
            userId: string,
            image: string
        }
    }
}