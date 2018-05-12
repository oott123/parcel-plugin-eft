# parcel-plugin-eft

Add [ef.js](https://ef.js.org) template support for parcel bundler.

## Install

Install via yarn: 

```bash
yarn add --dev parcel-plugin-eft
```

or via npm:

```bash
npm install --save-dev parcel-plugin-eft
```

## Usage

With this plugin set up properly, you can then import any `.eft` or `.ef` template files directly:

```javascript
import Hello from './hello.eft'

const helloWorld = new Hello({
  $data: {
    name: 'World'
  }
})

helloWorld.$mount({target: document.body})
```

## Typescript Shims

Create `shims.d.ts` under your project root:

```typescript
declare module '*.ef' {
  const template: any
  export default template;
}
declare module '*.eft' {
  const template: any
  export default template;
}
```
