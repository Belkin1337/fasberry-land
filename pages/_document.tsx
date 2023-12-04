import { Html, Head, Main, NextScript } from 'next/document'

import { Suspense } from 'react';
import { PreLoader }  from '@/components/ui/preloader/pre-loader';

export default function Document() {
  return (
    <Html lang="ru" suppressHydrationWarning>
      <Head />
      <body>
        <Suspense fallback={(<PreLoader />)}>
          <Main />
          <NextScript />
        </Suspense>
      </body>
    </Html>
  )
}