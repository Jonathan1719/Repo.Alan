import { DataSource } from 'typeorm';
import { Categoria } from './entities/categoria.entity'; // Asegúrate de que esta ruta sea la tuya

export const categoriaProviders = [
  {
    provide: 'CATEGORIA_REPOSITORY',
    inject: ['DATABASE_CONNECTION'], // <-- Aquí se pide la conexión
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Categoria),
  },
];