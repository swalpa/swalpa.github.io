import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios"

const handler = NextAuth({

  providers: [

    GithubProvider({
      async profile(profile) {
        console.log("Github profile: ", profile)
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${profile.email}`)
        if( !data ) throw new Error("User not found")
        return {
          id:     data._id, 
          name:   data.name,
          email:  profile.email,
          image:  profile.avatar_url,
          role:   data.role,
        }
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      async profile(profile) {
        //console.log("Google profile: ", profile)
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${profile.email}`)
        //console.log("Google profile: ", data)
        if( !data ) throw new Error("User not found")
        return {
          id:     data._id, 
          name:   data.name,
          email:  profile.email,
          image:  profile.avatar_url,
          role:   data.role,
        }
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "sarthakroy107@gmail.com" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if( !credentials || !credentials.email ) throw new Error("Please enter all the fields")
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/${credentials.email}`)     
        const user = data;
        return user;  
      }
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60 // 1 day
  },

  callbacks: {

    jwt({ token, user, account }) {
      //console.log("Account: ", account)
      //@ts-ignore
      if(user) token.role = user.role
      return token
    },

    session({ session, token }) {
      // @ts-ignore
      session.user.role = token.role
      return session
    },

    async signIn({ user }) {
      console.log("Sign In user: ", user)
      //@ts-ignore
      if( !user || !user.role ) return false
      return true
    },
  },
})

export { handler as GET, handler as POST }