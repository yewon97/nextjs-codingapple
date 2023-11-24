import { connectDB } from '@/util/database';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
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
  adapter: MongoDBAdapter(connectDB), // redis써도됨
};
export default NextAuth(authOptions);
