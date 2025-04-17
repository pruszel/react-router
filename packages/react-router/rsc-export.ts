export { createStaticHandler } from "./lib/router/router";
export {
  data,
  matchRoutes,
  redirect,
  redirectDocument,
  replace,
} from "./lib/router/utils";

export type {
  DecodeCallServerFunction,
  ServerManifestPayload,
  ServerMatch,
  ServerPayload,
  ServerRenderPayload,
  RenderedRoute as ServerRouteManifest,
  ServerRouteMatch,
  ServerRouteObject,
} from "./lib/rsc/server.rsc";
export { isReactServerRequest, matchServerRequest } from "./lib/rsc/server.rsc";
