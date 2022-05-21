## Getting Started

- Instalar las dependencias usando npm o yarn

```bash
npm install
# o
yarn 
```

Antes de continuar, recuerda agregar las variables de entorno que se encuentrar en el archivo `env.example` en un nuevo archivo llamado `.env.local`
> Puedes obtenerle en: https://www.fastforex.io/

Listo! Puedes levantar el servidor corriendo:

```bash
npm run dev
# or
yarn dev
```


Abre [http://localhost:3000](http://localhost:3000) con tu navegador y listo!.


### Estructura del proyecto
    .
    ├── src                     # Carpeta base
    │   ├── components          # Componentes de la aplicación
    │   │   ├── ui              # Componentes de la ui sin logica 
    │   ├── hooks               # Hooks personalizados
    │   ├── Layout              # Layout - Wrapper de estilos 
    │   ├── pages               # Paginas de la aplicación
    │   ├── public              # Archivos publicos de la aplicacion
    │   ├── services            # Servicios API de la aplicación
    │   ├── theme               # Configuración de ui (styled-components)
    │   ├── utils               # Funciones reutilizables 
     ...


### Theme
    .
    ├── theme                
    │   ├── GlobalStyle         
    │   │   ├── index.ts        # Configuracion global de stilos
    │   │   ├── normalice.ts    # Css inicial estandar para los navegadores
    │   ├── index.ts            # Configuracion de estilos (Colores, fuentes, breakpoints)

