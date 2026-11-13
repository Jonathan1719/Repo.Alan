import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';

@Module({
  imports: [ConfigModule],
  providers: [...databaseProvider, ConfigService],
  exports: [...databaseProvider], // <-- CRUCIAL: Esto comparte "DATABASE_CONNECTION" con el resto de la app
})
export class DatabaseModule {}