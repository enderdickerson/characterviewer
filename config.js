exports.db = function () {
  switch (process.env.NODE_ENV) {
    case 'local':
      return 'mysql://localhost:3306/local';
    case 'dev':
      return process.env.DATABASE_URL;
    default:
      return 'error';
  }
};
