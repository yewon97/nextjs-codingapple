import dotenv from 'dotenv';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
dotenv.config();

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_AUTH_ID,
      clientSecret: process.env.GITHUB_AUTH_PASSWORD,
    }),
  ],
  secret: process.env.SECRETKEY,
};
export default NextAuth(authOptions);
