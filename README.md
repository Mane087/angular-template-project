# AngularTemplateProject

Plantilla generada con [Angular CLI](https://github.com/angular/angular-cli) 22.1.4 y gestionada con pnpm.

## Herramientas

- TypeScript 5.9.3
- Prettier 3.9.6
- ESLint 10.9.0 + angular-eslint 22.2.0
- Husky 9.1.7 y lint-staged 17.4.1
- Commitlint 21.2.2
- Testing Library
- Tailwind CSS 4.3.3 y PostCSS 8.5.26

## Development server

Para iniciar el servidor local de desarrollo, ejecuta:

```bash
pnpm exec ng serve
```

Cuando el servidor esté activo, abre `http://localhost:4200/`. La aplicación se recarga automáticamente al modificar los archivos fuente.

## Code scaffolding

Angular CLI incluye herramientas de scaffolding. Para generar un componente nuevo, ejecuta:

```bash
pnpm exec ng generate component component-name
```

Para consultar la lista completa de schematics disponibles, ejecuta:

```bash
pnpm exec ng generate --help
```

## Building

Para compilar el proyecto, ejecuta:

```bash
pnpm exec ng build
```

Los artefactos se guardan en `dist/`. Por defecto, la compilación de producción optimiza la aplicación para rendimiento y velocidad.

## Running unit tests

Los scripts de pruebas usan Jest:

```bash
pnpm test
pnpm test:watch
pnpm test:ci
```

La configuración de Angular CLI conserva además un target `ng test` basado en [Karma](https://karma-runner.github.io); ambas configuraciones coexisten.

## Running end-to-end tests

No existe un target e2e configurado en este proyecto. Antes de ejecutar pruebas end-to-end (e2e), debes instalar y configurar un framework e2e compatible.

## Additional Resources

Para más información sobre Angular CLI y sus comandos, consulta la [guía y referencia de Angular CLI](https://angular.dev/tools/cli).
