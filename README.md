# BrowserElectron

Prueba de Browser en Electron xdxdxd

## Pre-requisitos 📋

_Antes de crear el proyecto, tener instalado:_

- [Node JS](https://nodejs.org)

## Despliegue 📦

_Inicializar un paquete npm:_

```shell
npm init -y
```

_Instalar [`Electron`](https://www.electronjs.org/) paquete en el archivo de su aplicación `devDependencies`:_

```shell
npm install --save-dev electron
```

_En `scripts` campo de su [`package.json`](package.json), agregue un el comando `start` como este:_

```Json
{
  "scripts": {
    "start": "electron ."
  }
}
```

_Instalar [`Tailwind CSS`](https://tailwindcss.com/)_

```shell
npm i tailwindcss
```

_Compilar [`Tailwind CSS`](https://tailwindcss.com/)_

```shell
npx tailwindcss build src/css/stylesTail.css -o src/styles/tailwind.css
```

_Use el comando `start` que permitira abrir el navegador en modo de desarrollo_

```shell
npm start
```

## Construido con 🛠️

### _Herramientas utilizadas para crear el proyecto_

- [Electron JS](https://www.electronjs.org/) - Framework para crear aplicaciones de escritorio multiplataforma con JavaScript, HTML y CSS.
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS de bajo nivel altamente personalizable.

## Autores ✒️

### _Ayudaron a levantar el proyecto desde sus inicios_

- **Julian David Gonzalez** - *Trabajo en Front-End y Back-End* [julian98O9](https://github.com/julian9809)
- **David Santiago Garces** - *Trabajo en Front-End y Back-End* [SantiYami](https://github.com/SantiYami)
- **Jhon Eddi Malagon** - *Trabajo en Front-End y Back-End* [JhonEddi](https://github.com/JhonEddi)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/SantiYami/BrowserElectron/contributors) quíenes han participado en este proyecto.
