# React Component Library

## Create Tarball file

```shell
$ npm pack
```

This will generate a `.tgz` file. Move this file into the same directory as our test React application. Once done, import the file using `npm` and this will be listed as a dependency in the `package.json` file.

```shell
$ npm install react-component-library-x.x.x.tgz
```

## Import Components

```javascript
import { Button } from 'react-component-library'
```
