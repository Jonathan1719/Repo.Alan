import { DataSource } from 'typeorm';
import { ConfigService } from 'src/config/config.service';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('DB_HOST') || 'localhost',
        port: +config.get('DB_PORT') || 5432,
        username: config.get('DB_USERNAME') || 'postgres',
        password: config.get('DB_PASSWORD') || '1234', // <-- Forzamos tu contraseña aquí como string
        database: config.get('DB_NAME') || 'back_nest_angular', // <-- Forzamos el nombre de tu BD aquí
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];