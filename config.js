exports.db = function () {
  switch (process.env.NODE_ENV) {
    case 'local':
      return require('./localdb').connectionString();
    case 'dev':
      return process.env.DATABASE_URL;
    default:
      return 'error';
  }
};