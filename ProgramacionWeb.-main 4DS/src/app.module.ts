import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { UsersModule } from './modules/users/users.module';
import { ProductosModule } from './modules/productos/productos.module';
import { RoleModule } from './modules/role/role.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { PedidoModule } from './modules/pedido/pedido.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    CategoriaModule,
    UsersModule,
    ProductosModule,
    RoleModule,
    ClienteModule,
    PedidoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
