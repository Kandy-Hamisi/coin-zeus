const config = {
  env: {
    authSecret: process.env.AUTH_SECRET!,
    databaseUrl: process.env.DATABASE_URL!,
  },
};

export default config;
