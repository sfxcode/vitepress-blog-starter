# daisyui-vue

Vue3 UI components based on [daisyui](https://github.com/saadeghi/daisyui).

## Usage

Install:

```bash
$ pnpm add daisyui-vue
# or
$ npm add daisyui-vue
# or
$ yarn add daisyui-vue
```

Import all(❌ not recommended):

```tsx
// main.ts
import daisyui from 'daisyui-vue'
import { createApp, defineComponent } from 'vue'

app.use(daisyui) // register all components expect icons

// App.tsx
const App = defineComponent({
  // ...
  setup: () => {
    return () => {
      return (
        <div>
          <dv-button>click</dv-button>
        </div>
      )
    }
  },
})
```

Use as needed(👍 recommended):

```tsx
// main.ts
import { installTheme } from 'daisyui-vue'

// App.tsx
// import what you need
import { Button } from 'daisyui-vue'

const app = createApp({
  // ...
})

// optional, install theme only when SSR to extract critical css
app.use(installTheme)

const App = defineComponent({
  // ...
  setup: () => {
    return () => {
      return (
        <div>
          <Button>click</Button>
        </div>
      )
    }
  },
})
```

Avoid `FOUC` problem when SSR:

```tsx
// entry-server.ts

export function render() {
  const app = createApp({
    // ...
  })

  const style = app.config.globalProperties.$daisyui.style.extractStyles() // <style>...</style>

  const html = renderToString(app)

  return html.replace('<!-- YOUR_STYLE_PLACEHOLDER -->', style)
}
```
