const config = {
  pgUser: process.env.POSTGRES_USER,
  pgHost: process.env.POSTGRES_HOST,
  pgDatabase: process.env.POSTGRES_DB,
  pgPassword: process.env.POSTGRES_PASSWORD,
  pgPort: process.env.POSTGRESS_PORT
};

module.exports = config;
