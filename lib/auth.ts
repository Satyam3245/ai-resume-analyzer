import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const option = {
    providers : [
        GitHubProvider({
            clientId : process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_OAUTH_SCERET!,
        })
    ],
    secret: process.env.AUTH_SECRET,
    callbacks : {
        
    }
}

export default option;