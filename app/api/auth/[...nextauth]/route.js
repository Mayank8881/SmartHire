// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/user";
// import { startSession } from "mongoose";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials"
// import bcrypt from "bcryptjs"

// export const authOptions={
//     providers:[
//         CredentialsProvider({
//             name:"credentials",
//             credentials:{},

//             async authorize(credentials){
//                 const {email,password}=credentials;
//                 try {
//                     await connectDB();
//                     const user=await User.findOne({email})

//                     if(!user){
//                         return null;
//                     }

//                     const passwordmatch=await bcrypt.compare(password,user.password)
//                     if(!passwordmatch){
//                         return null;
//                     }
//                     return user;
//                 } catch (error) {
//                     console.log("Errorrr ",error)
//                 }
//             }
//         }),
//     ],
//     session: {
//         strategy: "jwt",
//         maxAge: 30*60, // Session expires in 30 min
//         updateAge: 15 * 60, // Extend session every 15 minutes
//       },
      
//         secret:process.env.NEXTAUTH_SECRET,
//         pages:{
//             signIn:"/sign-in"
//         }
// }

// const handler=NextAuth(authOptions);
// export {handler as GET,handler as POST};

import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials;
                try {
                    await connectDB();
                    const user = await User.findOne({ email });

                    if (!user) {
                        return null;
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (!passwordMatch) {
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log("Error ", error);
                    return null;
                }
            }
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 60, 
        updateAge: 15 * 60, 
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/sign-in",
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Redirect to /ResumeLanding after successful login
            if (url === "/") {
                return `${baseUrl}/ResumeLanding`;
            }
            // For other URLs, proceed with the intended destination
            return url.startsWith(baseUrl) ? url : baseUrl;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
