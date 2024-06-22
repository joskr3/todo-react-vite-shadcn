
```markdown
# React + TypeScript + Vite

## Guía de instalación

1. Ejecutar el comando:
   - `npm create vite@latest`
   (esto lanza el script para configurar el proyecto de React.js)
   - Deberán seleccionar `react`
   - y acto seguido seleccionar `javascript`

2. Una vez terminado de ejecutar ese script:
   - `cd <nombre-del-proyecto>` + Enter
   - `npm install`
   - `code .`
   (esto es para abrir el proyecto en VSCode)

3. Instalar Tailwind CSS:
   - Ejecutar el siguiente comando:
     - `npm install -D tailwindcss postcss autoprefixer`
   - Acto seguido, este comando:
     - `npx tailwindcss init -p`
     (esto sirve para ejecutar el script de Tailwind CSS)
   - Deberán modificar el archivo `tailwind.config.js`:
     - En la propiedad `content`, reemplazarla por el siguiente código:

       ```javascript
       content: [
         "./index.html",
         "./src/**/*.{js,ts,jsx,tsx}",
       ]
       ```

   - En `index.css`:
     - Modificar el archivo para que solo contenga lo siguiente:
       ```css
       @tailwind base;
       @tailwind components;
       @tailwind utilities;
       ```

   - Finalmente, hacer una prueba para comprobar que Tailwind CSS fue instalado correctamente:
     - En `App.tsx` o `App.jsx`, reemplazar lo que va dentro del `return` con esto:
       ```jsx
       <h1 className="text-3xl font-bold underline">
         Hello world!
       </h1>
       ```

4. Ahora instalamos `shadcn` para usarlo con Vite:
   1. Reemplazar el contenido de `tsconfig.json` para que incluya lo siguiente:

      ```json
      {
        "compilerOptions": {
          "jsx": "react",
          "esModuleInterop": true,
          "baseUrl": ".",
          "paths": {
            "@/*": ["./src/*"]
          }
          // ...
        }
      }
      ```

   2. Instalar los tipos de node:
      - `npm i -D @types/node`

   3. Ahora reemplazamos lo que hay en `vite.config.ts` o `vite.config.js`:

      ```javascript
      import { defineConfig } from 'vite'
      import react from '@vitejs/plugin-react-swc'
      import path from "path"

      export default defineConfig({
        plugins: [react()],
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "./src"),
          },
        },
      })
      ```

5. Comprobamos que la instalación y las configuraciones son correctas al inicializar `shadcn` y escoger las siguientes opciones:

   ```text
   Would you like to use TypeScript (recommended)?  yes
   Which style would you like to use? › Default
   Which color would you like to use as base color? › Slate
   Where is your global CSS file? › src/index.css
   Do you want to use CSS variables for colors? › yes
   Where is your tailwind.config.js located? › tailwind.config.js
   Configure the import alias for components: › @/components
   Configure the import alias for utils: › @/lib/utils
   Are you using React Server Components? › no
   ```

6. Comprobamos que la instalación fue correcta al "instalar un botón":
   - `npx shadcn-ui@latest add button`
   Esto debería crear un botón dentro de la carpeta `components`.

7. Finalmente, en `App.tsx`:

   - Llamamos al componente `Button` y comprobamos que está funcionando:

     ```jsx
     import './App.css'
     import React from 'react'
     import { Button } from './components/ui/button'
     import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

     function App() {
       return (
         <>
           <h1 className="text-3xl font-bold underline">
             Hello world!
           </h1>
           <Button>Click me</Button>
           <Avatar>
             <AvatarImage src="https://github.com/shadcn.png" />
             <AvatarFallback>CN</AvatarFallback>
           </Avatar>
         </>
       )
     }

     export default App
     ```
```
