import nextAuth, { DefaultSession } from "next-auth";

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            role: string;
            status: string;
            number: string;
            name: string;
            email: string;
            image: string;
        } & DefaultSession['user']
    }
    interface User {
        id: string;
        role: string;
        status: string;
        number: string;
        name: string;
        email: string;
        image: string;
      }
}

declare module "next-auth/jwt" {
    interface JWT {
      id: string;
      role: string;
      status: string;
      name: string;
      number: string;
      image: string;
    }
  }