/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 환경변수 값 추가
interface ImportMetaEnv {
  readonly ENV_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}