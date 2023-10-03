# **vite-plugin-corp-headers**
![vite-plugin-corp-headers](https://github.com/chariotsolutions/vite-plugin-corp-headers)

An example that shows how to create a custom Vite plugin

## Description

vite-plugin-corp-headers is a plugin for Vite.js that is an example plugin showing how to customize the Vite build system. 
This plugin is designed to seamlessly integrate with Vite.js, leveraging its fast and efficient development server. 

## How to Use

The `example` directory is a vanilla Vite project generated with the following options:

```bash
npx create-vite@latest

- project name: example
- framework: Vanilla
- variant: Typescript
```

The `vite.config.ts` configuration file shows how to use a Vite plugin:

```javascript
import pluginCORPHeaders from "../src/index";

export default {
  plugins: [
    pluginCORPHeaders({
      // Configuration options
    }),
  ],
};
```
1. Build the plugin
```bash
npm run build
```

2. Start the Vite development server:

```bash
cd example
npm run dev
```

3. Your development server will be available at `http://localhost:5173` by default.

## Configuration

The plugin supports the following configuration options:

- `coep`: Default "require-corp". Options: ["unsafe-none", "require-corp"] 
- `coop`: Default "same-origin". Options: ["unsafe-none", "same-origin-allow-popups", "same-origin"] 
  Please refer to the [CORP documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy) for more details on these configuration options.

## License

This plugin is licensed under the [Apache 2.0](https://opensource.org/licenses/apache-2.0).
