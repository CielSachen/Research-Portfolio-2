import type { RouteObject } from 'react-router-dom';

import type { Route } from '../utilities/routes';

export function createRouteObject(routes: Route[]): RouteObject[] {
  return routes.map((route) => route.index
    ? {
      index: route.index,
      element: route.element,
    }
    : {
      path: route.path,
      children: route.children
        ? createRouteObject(route.children)
        : undefined,
      element: route.element,
    });
}
