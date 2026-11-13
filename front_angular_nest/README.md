# FrontAngularNest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Ejecutar el frontend

Desde esta carpeta, instala las dependencias y levanta Angular:

```powershell
npm install
npm start
```

Abre `http://localhost:4200/auth/login`. Tras iniciar sesión correctamente, la aplicación navega a `/admin`.

## Sakai

El login y el área administrativa usan Sakai 17 con PrimeNG. El menú incluye las rutas de perfil, inventario, pedidos, clientes, usuarios y roles. Usuarios y roles muestran una página temporal hasta implementar sus pantallas. Los componentes del layout están en `src/app/admin/layout/sakai` y los estilos, temas e imágenes en `src/assets/layout`. El aviso de licencia MIT de Sakai se conserva en `src/assets/layout/LICENSE.md`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

`npm run build` genera la compilación en `dist/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
