import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: MenuItem[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit(): void {
        this.model = [
            {
                label: 'Administración',
                items: [
                    { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
                    { label: 'Perfil', icon: 'pi pi-fw pi-user', routerLink: ['/admin/perfil'] }
                ]
            },
            {
                label: 'Inventario',
                items: [
                    { label: 'Categorías', icon: 'pi pi-fw pi-tags', routerLink: ['/admin/categoria'] },
                    { label: 'Productos', icon: 'pi pi-fw pi-box', routerLink: ['/admin/producto'] }
                ]
            },
            {
                label: 'Pedidos',
                items: [
                    { label: 'Lista de pedidos', icon: 'pi pi-fw pi-list', routerLink: ['/admin/pedido'] },
                    { label: 'Nuevo pedido', icon: 'pi pi-fw pi-plus-circle', routerLink: ['/admin/pedido/nuevo'] }
                ]
            },
            {
                label: 'Clientes',
                items: [
                    { label: 'Clientes', icon: 'pi pi-fw pi-users', routerLink: ['/admin/cliente'] }
                ]
            },
            {
                label: 'Roles y usuario',
                items: [
                    { label: 'Usuarios', icon: 'pi pi-fw pi-user', routerLink: ['/admin/usuarios'] },
                    { label: 'Roles', icon: 'pi pi-fw pi-shield', routerLink: ['/admin/roles'] }
                ]
            }
        ];
    }
}
