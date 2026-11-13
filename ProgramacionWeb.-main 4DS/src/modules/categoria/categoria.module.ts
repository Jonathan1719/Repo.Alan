import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { DatabaseModule } from 'src/database/database.module'; // <-- Importa tu módulo de base de datos
import { categoriaProviders } from './categoria.providers';

@Module({
  imports: [DatabaseModule], // <-- ¡Añadido aquí!
  controllers: [CategoriaController],
  providers: [
    ...categoriaProviders,
    CategoriaService,
  ],
  exports: [CategoriaService],
})
export class CategoriaModule {}