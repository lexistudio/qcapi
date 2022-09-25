module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      // settings: {
      //   client: "mysql",
      //   host: env('DATABASE_HOST', 'localhost'),
      //   port: env('DATABASE_PORT', 3306),
      //   database: env('DATABASE_NAME', 'default'),
      //   username: env('DATABASE_USERNAME', 'root'),
      //   password: env('DATABASE_PASSWORD', ''),
      // },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
