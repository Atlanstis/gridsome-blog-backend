module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "blog"),
        username: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", "8!DdZA%7rzgd6-$"),
      },
      options: {},
    },
  },
});
