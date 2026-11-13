import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPlaceholderComponent } from './components/admin-placeholder/admin-placeholder.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListaPedidoComponent } from './pedido/components/lista-pedido/lista-pedido.component';
import { NuevoPedidoComponent } from './pedido/components/nuevo-pedido/nuevo-pedido.component';
import { AppLayoutModule } from './layout/sakai/app.layout.module';
import { InventarioModule } from './inventario/inventario.module';


@NgModule({
  declarations: [
    AdminPlaceholderComponent,
    PerfilComponent,
    ClienteComponent,
    ListaPedidoComponent,
    NuevoPedidoComponent,
  ],
  imports: [
    CommonModule,
    InventarioModule,
    AppLayoutModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
