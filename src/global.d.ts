declare module '*.module.scss' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.scss' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
