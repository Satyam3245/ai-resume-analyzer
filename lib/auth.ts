import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./db";

const option   = {
    providers : [
        GitHubProvider({
            clientId : process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.AUTH_SECRET,
    callbacks : {
        async signIn({user,account}:any) {

            if(!user.email || !account?.provider){
                return false
            }
            const provider = account?.provider === "google"? "GOOGLE": "GITHUB";
            try {
                const existingUser = await prisma.user.findUnique({
                    where : {
                        email : user.email,
                    }
                });
                // upsert 
                if(!existingUser){
                    await prisma.user.create({
                        data : {
                            email : user.email,
                            provider : provider
                        }
                    });
                }
                return true
            } catch (error) {
                console.log(error)
                return false;
            }

        },
        async redirect(){
            return '/'
        }
    }
}

export default option;