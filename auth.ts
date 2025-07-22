import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; // Your own logic for dealing with plaintext password strings; be careful!

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.

      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        return null;
      },
    }),
  ],
});
