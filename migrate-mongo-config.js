const config = {
    mongodb: {
        url: 'mongodb://127.0.0.1:27017',
        databaseName: 'beeda-ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },

    migrationsDir: 'migrations',
    changelogCollectionName: 'changelog',
    migrationFileExtension: '.js',
    useFileHash: false,
    moduleSystem: 'commonjs',
};

module.exports = config;
