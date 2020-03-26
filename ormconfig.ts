import { ConnectionOptions } from 'typeorm';


const config: ConnectionOptions = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "shounak",
    "password": "Shounak@123",
    "database": "courses",
    "entities": [__dirname + '/**/*.entity.ts'],
    "synchronize": false,
    "migrationsRun": true,
    "logging": true,
    "migrations": [__dirname + '/migrations/**/*{.ts, .js}'],
    "cli": {
        "migrationsDir": 'src/mirations'
    }
}

export = config;