# LATAM Name Parser

[![Build Status](https://github.com/DHurtado714-itesm/latam-name-parser/actions/workflows/publish.yml/badge.svg)](https://github.com/DHurtado714-itesm/latam-name-parser/actions)

LATAM Name Parser es un módulo npm que facilita el parseo de nombres y apellidos en diferentes países de Latinoamérica. La estructura de los nombres y apellidos puede variar significativamente entre países, y este módulo está diseñado para manejar estas variaciones, permitiendo a los desarrolladores trabajar de manera más eficiente.

## Objetivo

El objetivo de este proyecto es proporcionar una herramienta fácil de usar para el parseo de nombres y apellidos en Latinoamérica. Con esta herramienta, los desarrolladores pueden manejar nombres y apellidos de manera consistente y precisa según el país, lo que es especialmente útil en aplicaciones multilingües y multiculturales.

## Instalación

Para instalar el módulo, puedes usar `pnpm`, `npm` o `yarn`:

```bash
pnpm install latam-name-parser
# o
npm install latam-name-parser
# o
yarn add latam-name-parser
```
## Uso

### Parser General

El parser general divide un nombre en partes según la longitud del nombre. No tiene en cuenta datos específicos de ningún país.
```javascript
const { parseGeneralName } = require('latam-name-parser');

const parsedName = parseGeneralName('José Luis García Hernández');
console.log(parsedName);
// Output: { firstName: 'José Luis', lastName: 'García Hernández' }
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1.  Haz un fork del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3.  Haz tus cambios y commitea (`git commit -am 'Añadir nueva funcionalidad'`).
4.  Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5.  Abre un Pull Request.