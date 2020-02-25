// configuration to distinguish between production and development environment
const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI,
    },

    default: {
        SECRET: 'sugarandsalt1990',
        DATABASE: 'mongodb://localhost:27017/bookshelf',
    }
}

exports.get = function get(env){
    return config[env] || config.default
}