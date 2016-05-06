exports.db = function(){
    switch(process.env.NODE_ENV){
        case 'local':
            return 'mongodb://localhost:27017/local';
        case 'dev':
            return process.env.CLEARDB_DATABASE_URL;
        default:
            return 'error';
    }
};
