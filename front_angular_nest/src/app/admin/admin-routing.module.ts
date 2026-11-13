import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPlaceholderComponent } from './components/admin-placeholder/admin-placeholder.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CategoriaComponent } from './inventario/components/categoria/categoria.component';
import { ProductoComponent } from './inventario/components/producto/producto.component';
import { ListaPedidoComponent } from './pedido/components/lista-pedido/lista-pedido.component';
import { NuevoPedidoComponent } from './pedido/components/nuevo-pedido/nuevo-pedido.component';
import { AppLayoutComponent } from './layout/sakai/app.layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'perfil',
        pathMatch: 'full'
      },
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'categoria',
        component: CategoriaComponent
      },
      {
        path: 'producto',
        component: ProductoComponent
      },
      {
        path: 'pedido',
        component: ListaPedidoComponent
      },
      {
        path: 'pedido/nuevo',
        component: NuevoPedidoComponent
      },
      {
        path: 'cliente',
        component: ClienteComponent
      },
      {
        path: 'usuarios',
        component: AdminPlaceholderComponent,
        data: { title: 'Usuarios' }
      },
      {
        path: 'roles',
        component: AdminPlaceholderComponent,
        data: { title: 'Roles' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { } 
