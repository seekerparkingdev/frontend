# Cliente Web Project

## Estructura del Proyecto

```
CLIENTE/
├── node_modules/     # Dependencias del proyecto
├── public/          # Archivos estáticos
└── src/             # Código fuente
    ├── components/  # Componentes React
    ├── pages/       # Páginas de la aplicación
    ├── services/    # Servicios y lógica de negocio
    ├── styles/      # Estilos CSS
    │   └── additional-styles/  # Estilos personalizados
    ├── App.jsx      # Componente principal
    └── main.jsx     # Punto de entrada
```

## Tecnologías Principales

- **React/Vite**: Framework principal para el desarrollo frontend
- **Tailwind CSS**: Framework de utilidades CSS
- **Flatpickr**: Librería para selectores de fecha
- **PostCSS**: Procesador CSS
- **ESLint**: Linting de código

## Configuración Inicial

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Construir para producción:
```bash
npm run build
```

## Convenciones del Proyecto

- Los componentes React se encuentran en `/src/components`
- Las páginas/rutas en `/src/pages`
- Los estilos personalizados van en `/src/styles/additional-styles`
- Los servicios y lógica de negocio en `/src/services`

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run lint`: Ejecuta el linter
- `npm run preview`: Vista previa de la versión de producción

## Estructura de Estilos

El proyecto utiliza una combinación de:
- Tailwind CSS para utilidades generales
- Estilos personalizados en `/src/styles/additional-styles`
- Variables CSS para temas y configuración global

## Arquitectura

Este proyecto sigue una arquitectura modular donde:
- Los componentes son reutilizables y autocontenidos
- Las páginas componen la interfaz usando estos componentes
- Los servicios manejan la lógica de negocio
- Los estilos están organizados por funcionalidad

## Desarrollo

Para contribuir al proyecto:
1. Crear una nueva rama desde `main`
2. Realizar cambios siguiendo las convenciones del proyecto
3. Asegurar que el linter no muestre errores
4. Crear un pull request con una descripción detallada