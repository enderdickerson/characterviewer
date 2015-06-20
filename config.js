exports.db = function(){
    switch(process.env.NODE_ENV){
        case 'local':
            return 'mongodb://localhost:27017/local';

        case 'dev':
            return process.env.MONGOLAB_URI;

        default:
            return 'error';
    }
};
