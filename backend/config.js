const randomKey = require('random-key');

config = {
    backend: {
        host: "localhost",
        port: 8000
    },
    db: {
        //url: 'mongodb://mongo:27017',
        //url: 'http://localhost:27017/',
        url: 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb',
        importSampleData: true
    },
    auth: {
        sessionSecret: randomKey.generate(64)
    }
};

module.exports = config;