import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './contexts';
import { createRouteObject } from './helpers';
import { MainLayout } from './layout';
import { routes } from './utilities';

function fallbackComponent(props: FallbackProps) {
  return (
    <>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{(props.error as Error).message}</pre>
    </>
  );
}

const router = createHashRouter([{
  path: '/',
  children: createRouteObject(routes),
  element: <MainLayout />,
}]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={fallbackComponent}>
      <ThemeProvider>
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
);
