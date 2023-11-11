globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, setHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/ofetch/dist/node.mjs';
import destr from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/scule/dist/index.mjs';
import { klona } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47memory from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unstorage/drivers/memory.mjs';
import unstorage_47drivers_47lru_45cache from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unstorage/drivers/lru-cache.mjs';
import unstorage_47drivers_47fs_45lite from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://C:/Users/shius/Desktop/campaign-website/node_modules/pathe/dist/index.mjs';

const inlineAppConfig = {
  "nuxt": {
    "buildId": "341df935-efe6-44bf-9649-271e4982ca1a"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/Users/shius/Desktop/campaign-website/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', unstorage_47drivers_47memory({"driver":"memory"}));
storage.mount('internal:nuxt:prerender:island', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('internal:nuxt:prerender:payload', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"C:\\Users\\shius\\Desktop\\campaign-website\\.data\\kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\shius\\Desktop\\campaign-website","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\shius\\Desktop\\campaign-website\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\shius\\Desktop\\campaign-website\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\shius\\Desktop\\campaign-website\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/.nojekyll": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-11-11T00:59:21.333Z",
    "size": 0,
    "path": "../../.output/public/.nojekyll"
  },
  "/_nuxt/advocate.b62250f1.svg": {
    "type": "image/svg+xml",
    "etag": "\"235c72-ImW99RADV6pdFgNGpTlZbJ2wZ3E\"",
    "mtime": "2023-11-11T01:06:13.638Z",
    "size": 2317426,
    "path": "../../.output/public/_nuxt/advocate.b62250f1.svg"
  },
  "/_nuxt/constant.f5cdd703.js": {
    "type": "application/javascript",
    "etag": "\"fc5-4FvRnvIEQlSpPZO+STYZbyrDNgs\"",
    "mtime": "2023-11-11T01:06:13.638Z",
    "size": 4037,
    "path": "../../.output/public/_nuxt/constant.f5cdd703.js"
  },
  "/_nuxt/default.8e3ff4e5.js": {
    "type": "application/javascript",
    "etag": "\"666-gUcui9UIagrrLGvXA4kYoNC1n1s\"",
    "mtime": "2023-11-11T01:06:13.644Z",
    "size": 1638,
    "path": "../../.output/public/_nuxt/default.8e3ff4e5.js"
  },
  "/_nuxt/default.ebfd654e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7b-Hq7LbCLMGpUnWEV5VpwamMpMzc8\"",
    "mtime": "2023-11-11T01:06:13.637Z",
    "size": 123,
    "path": "../../.output/public/_nuxt/default.ebfd654e.css"
  },
  "/_nuxt/donate.c6c78d8d.svg": {
    "type": "image/svg+xml",
    "etag": "\"296ba-TngZeZ88fe0WSW2Q4zplPXR6sh8\"",
    "mtime": "2023-11-11T01:06:13.631Z",
    "size": 169658,
    "path": "../../.output/public/_nuxt/donate.c6c78d8d.svg"
  },
  "/_nuxt/entry.670eb3b8.js": {
    "type": "application/javascript",
    "etag": "\"704e3-DSLbd/CIPaKnNTlLSspNchgRBL4\"",
    "mtime": "2023-11-11T01:06:13.645Z",
    "size": 460003,
    "path": "../../.output/public/_nuxt/entry.670eb3b8.js"
  },
  "/_nuxt/entry.c53cd0a5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79eb5-hxXHCM1AzUDYqj45zF3bZVqRuHY\"",
    "mtime": "2023-11-11T01:06:13.631Z",
    "size": 499381,
    "path": "../../.output/public/_nuxt/entry.c53cd0a5.css"
  },
  "/_nuxt/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2023-11-11T01:06:13.631Z",
    "size": 3630,
    "path": "../../.output/public/_nuxt/error-404.7fc72018.css"
  },
  "/_nuxt/error-404.c668fed5.js": {
    "type": "application/javascript",
    "etag": "\"92a-fZmHQErfkUbjE0XEiQeUINUzqoc\"",
    "mtime": "2023-11-11T01:06:13.641Z",
    "size": 2346,
    "path": "../../.output/public/_nuxt/error-404.c668fed5.js"
  },
  "/_nuxt/error-500.1e253e52.js": {
    "type": "application/javascript",
    "etag": "\"7b3-bziFCpHwyTLoZgNr4ZrF9u7CFZg\"",
    "mtime": "2023-11-11T01:06:13.641Z",
    "size": 1971,
    "path": "../../.output/public/_nuxt/error-500.1e253e52.js"
  },
  "/_nuxt/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2023-11-11T01:06:13.631Z",
    "size": 1950,
    "path": "../../.output/public/_nuxt/error-500.c5df6088.css"
  },
  "/_nuxt/index.19ac9be9.js": {
    "type": "application/javascript",
    "etag": "\"9a-uSaxZ7ebdmK5HzE25VdvuS7YESM\"",
    "mtime": "2023-11-11T01:06:13.638Z",
    "size": 154,
    "path": "../../.output/public/_nuxt/index.19ac9be9.js"
  },
  "/_nuxt/index.1e372f49.js": {
    "type": "application/javascript",
    "etag": "\"154-/pTOoBCBuqEqBdao0r39UxCZpTQ\"",
    "mtime": "2023-11-11T01:06:13.638Z",
    "size": 340,
    "path": "../../.output/public/_nuxt/index.1e372f49.js"
  },
  "/_nuxt/index.75f5e7b7.js": {
    "type": "application/javascript",
    "etag": "\"1917e-tOYGue5gup9NAhAJSBhtZrquwmo\"",
    "mtime": "2023-11-11T01:06:13.644Z",
    "size": 102782,
    "path": "../../.output/public/_nuxt/index.75f5e7b7.js"
  },
  "/_nuxt/index.b4af68bb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3445-9SHiv+jIqaCDjQ+05U8SxJ3HtiE\"",
    "mtime": "2023-11-11T01:06:13.637Z",
    "size": 13381,
    "path": "../../.output/public/_nuxt/index.b4af68bb.css"
  },
  "/_nuxt/index.bee169a0.js": {
    "type": "application/javascript",
    "etag": "\"9a-UfYUZOe06pu9OveHYM/Mmij+sa4\"",
    "mtime": "2023-11-11T01:06:13.639Z",
    "size": 154,
    "path": "../../.output/public/_nuxt/index.bee169a0.js"
  },
  "/_nuxt/index.bf8ae4a0.js": {
    "type": "application/javascript",
    "etag": "\"9b-DKDsc4ia+QSB0FMA3zYij4KUXUI\"",
    "mtime": "2023-11-11T01:06:13.638Z",
    "size": 155,
    "path": "../../.output/public/_nuxt/index.bf8ae4a0.js"
  },
  "/_nuxt/index.edcc1af3.js": {
    "type": "application/javascript",
    "etag": "\"2b5-JiJjSO6hPxtBFvt5/TVjOuXF/2U\"",
    "mtime": "2023-11-11T01:06:13.638Z",
    "size": 693,
    "path": "../../.output/public/_nuxt/index.edcc1af3.js"
  },
  "/_nuxt/index.f7bf9a53.js": {
    "type": "application/javascript",
    "etag": "\"3a6-xiAGISzIsJMZiWMOzT88rPg4QKY\"",
    "mtime": "2023-11-11T01:06:13.638Z",
    "size": 934,
    "path": "../../.output/public/_nuxt/index.f7bf9a53.js"
  },
  "/_nuxt/logo.daf771f3.svg": {
    "type": "image/svg+xml",
    "etag": "\"473-M9FN+8YJteq6g0x4ofiUquvF0L4\"",
    "mtime": "2023-11-11T01:06:13.633Z",
    "size": 1139,
    "path": "../../.output/public/_nuxt/logo.daf771f3.svg"
  },
  "/_nuxt/mail.4ced524b.svg": {
    "type": "image/svg+xml",
    "etag": "\"db8c-JgfRz2e33SffidYbas/qlioZIl4\"",
    "mtime": "2023-11-11T01:06:13.633Z",
    "size": 56204,
    "path": "../../.output/public/_nuxt/mail.4ced524b.svg"
  },
  "/_nuxt/main-bg.a8c078e2.svg": {
    "type": "image/svg+xml",
    "etag": "\"13e9-XkBEFqQ/lIzqE9rSGevzZku432w\"",
    "mtime": "2023-11-11T01:06:13.631Z",
    "size": 5097,
    "path": "../../.output/public/_nuxt/main-bg.a8c078e2.svg"
  },
  "/_nuxt/main.4456e757.svg": {
    "type": "image/svg+xml",
    "etag": "\"c0173-C0gSEFBf7AwKkaWt09V7zotgojw\"",
    "mtime": "2023-11-11T01:06:13.633Z",
    "size": 786803,
    "path": "../../.output/public/_nuxt/main.4456e757.svg"
  },
  "/_nuxt/MantouSans-Regular.e41fbe45.ttf": {
    "type": "font/ttf",
    "etag": "\"283acc-hySJFda+ZU8YSizCgFRhwlVFxT0\"",
    "mtime": "2023-11-11T01:06:13.638Z",
    "size": 2636492,
    "path": "../../.output/public/_nuxt/MantouSans-Regular.e41fbe45.ttf"
  },
  "/_nuxt/materialdesignicons-webfont.28c8f97f.woff": {
    "type": "font/woff",
    "etag": "\"8e734-+KptVlaYonUFdqzyzszpaooJ2Es\"",
    "mtime": "2023-11-11T01:06:13.624Z",
    "size": 583476,
    "path": "../../.output/public/_nuxt/materialdesignicons-webfont.28c8f97f.woff"
  },
  "/_nuxt/materialdesignicons-webfont.31010194.woff2": {
    "type": "font/woff2",
    "etag": "\"61c3c-cTClcS7keOX4iPb7QRijRm3YOlo\"",
    "mtime": "2023-11-11T01:06:13.631Z",
    "size": 400444,
    "path": "../../.output/public/_nuxt/materialdesignicons-webfont.31010194.woff2"
  },
  "/_nuxt/materialdesignicons-webfont.5159a347.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"13c47c-9CNn7pOJlpucx3tcFKMNfF31wYQ\"",
    "mtime": "2023-11-11T01:06:13.634Z",
    "size": 1295484,
    "path": "../../.output/public/_nuxt/materialdesignicons-webfont.5159a347.eot"
  },
  "/_nuxt/materialdesignicons-webfont.be825c12.ttf": {
    "type": "font/ttf",
    "etag": "\"13c3a0-9w28DMW4v1GTXH5vhoEUKWH9gto\"",
    "mtime": "2023-11-11T01:06:13.634Z",
    "size": 1295264,
    "path": "../../.output/public/_nuxt/materialdesignicons-webfont.be825c12.ttf"
  },
  "/_nuxt/nuxt-link.f05fdc8c.js": {
    "type": "application/javascript",
    "etag": "\"fcb-um38uKuBwCWZNEmPfsg+7Izgyeo\"",
    "mtime": "2023-11-11T01:06:13.641Z",
    "size": 4043,
    "path": "../../.output/public/_nuxt/nuxt-link.f05fdc8c.js"
  },
  "/_nuxt/policy-heaven.43f423d6.svg": {
    "type": "image/svg+xml",
    "etag": "\"5496c-t+knkpojgTKnC4OlN4vPDFaZN8g\"",
    "mtime": "2023-11-11T01:06:13.631Z",
    "size": 346476,
    "path": "../../.output/public/_nuxt/policy-heaven.43f423d6.svg"
  },
  "/_nuxt/policy-learn.e60d3f24.svg": {
    "type": "image/svg+xml",
    "etag": "\"4d1ab-PjiocwhFhzThjOCx3riiR3lFCok\"",
    "mtime": "2023-11-11T01:06:13.631Z",
    "size": 315819,
    "path": "../../.output/public/_nuxt/policy-learn.e60d3f24.svg"
  },
  "/_nuxt/policy-medical.989e5199.svg": {
    "type": "image/svg+xml",
    "etag": "\"5f444-rXYYeIhXJawhrsJ8RhJMQ/5R2h4\"",
    "mtime": "2023-11-11T01:06:13.631Z",
    "size": 390212,
    "path": "../../.output/public/_nuxt/policy-medical.989e5199.svg"
  },
  "/_nuxt/seminar.30055a18.svg": {
    "type": "image/svg+xml",
    "etag": "\"76752d-z/Dl+YTZL8rz9U2E8/k/dPlo1w0\"",
    "mtime": "2023-11-11T01:06:13.646Z",
    "size": 7763245,
    "path": "../../.output/public/_nuxt/seminar.30055a18.svg"
  },
  "/_nuxt/show.c73e8f9f.svg": {
    "type": "image/svg+xml",
    "etag": "\"5aec15-9SuIaiPZnGgqCLB3nJmPlj+Sqes\"",
    "mtime": "2023-11-11T01:06:13.645Z",
    "size": 5958677,
    "path": "../../.output/public/_nuxt/show.c73e8f9f.svg"
  },
  "/_nuxt/vue.f36acd1f.5f031834.js": {
    "type": "application/javascript",
    "etag": "\"186-lPPMQh7QdLQPEnZ2tSWWi7e+A/U\"",
    "mtime": "2023-11-11T01:06:13.641Z",
    "size": 390,
    "path": "../../.output/public/_nuxt/vue.f36acd1f.5f031834.js"
  },
  "/_nuxt/walk.25b7fb93.svg": {
    "type": "image/svg+xml",
    "etag": "\"a445b7-B/zNRHpwkaUURxwKz2X4zsd3YSQ\"",
    "mtime": "2023-11-11T01:06:13.647Z",
    "size": 10765751,
    "path": "../../.output/public/_nuxt/walk.25b7fb93.svg"
  },
  "/_nuxt/_...slug_.0ab3579d.js": {
    "type": "application/javascript",
    "etag": "\"b9-EuRElvQU4tm9btIk1YtqHBHbbVU\"",
    "mtime": "2023-11-11T01:06:13.638Z",
    "size": 185,
    "path": "../../.output/public/_nuxt/_...slug_.0ab3579d.js"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2023-11-11T01:06:13.638Z",
    "size": 91,
    "path": "../../.output/public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-hIB/e9a6v6BcT0cvX7ACigkkYYY\"",
    "mtime": "2023-11-11T01:06:25.971Z",
    "size": 71,
    "path": "../../.output/public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/341df935-efe6-44bf-9649-271e4982ca1a.json": {
    "type": "application/json",
    "etag": "\"8b-uj13iboCex/BmRGgjYCqFV0TY+c\"",
    "mtime": "2023-11-11T01:06:25.972Z",
    "size": 139,
    "path": "../../.output/public/_nuxt/builds/meta/341df935-efe6-44bf-9649-271e4982ca1a.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta":{"maxAge":31536000},"/_nuxt/builds":{"maxAge":1},"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const robots = {
  "UserAgent": "*",
  "Disallow": ""
};

const _s0Y6NS = defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/plain");
  return render(await getRules(robots, event.req));
});
var Correspondence = /* @__PURE__ */ ((Correspondence2) => {
  Correspondence2[Correspondence2["User-agent"] = 0] = "User-agent";
  Correspondence2[Correspondence2["Crawl-delay"] = 1] = "Crawl-delay";
  Correspondence2[Correspondence2["Disallow"] = 2] = "Disallow";
  Correspondence2[Correspondence2["Allow"] = 3] = "Allow";
  Correspondence2[Correspondence2["Host"] = 4] = "Host";
  Correspondence2[Correspondence2["Sitemap"] = 5] = "Sitemap";
  Correspondence2[Correspondence2["Clean-param"] = 6] = "Clean-param";
  Correspondence2[Correspondence2["Comment"] = 7] = "Comment";
  Correspondence2[Correspondence2["BlankLine"] = 8] = "BlankLine";
  return Correspondence2;
})(Correspondence || {});
function render(rules) {
  return rules.map((rule) => {
    const value = String(rule.value).trim();
    switch (rule.key.toString()) {
      case Correspondence[7 /* Comment */]:
        return `# ${value}`;
      case Correspondence[8 /* BlankLine */]:
        return "";
      default:
        return `${rule.key}: ${value}`;
    }
  }).join("\n");
}
async function getRules(options, req) {
  const correspondences = {
    useragent: "User-agent",
    crawldelay: "Crawl-delay",
    disallow: "Disallow",
    allow: "Allow",
    host: "Host",
    sitemap: "Sitemap",
    cleanparam: "Clean-param",
    comment: "Comment",
    blankline: "BlankLine"
  };
  const rules = [];
  const parseRule = (rule) => {
    const parsed = {};
    for (const [key, value] of Object.entries(rule)) {
      parsed[String(key).toLowerCase().replace(/[\W_]+/g, "")] = value;
    }
    return parsed;
  };
  for (const rule of Array.isArray(options) ? options : [options]) {
    const parsed = parseRule(rule);
    const keys = Object.keys(correspondences).filter((key) => typeof parsed[key] !== "undefined");
    for (const key of keys) {
      const parsedKey = parsed[key];
      let values;
      values = typeof parsedKey === "function" ? await parsedKey(req) : parsedKey;
      values = Array.isArray(values) ? values : [values];
      for (const value of values) {
        const v = typeof value === "function" ? await value(req) : value;
        if (v === false) {
          continue;
        }
        rules.push({
          key: correspondences[key],
          value: v
        });
      }
    }
  }
  return rules;
}

const _lazy_eVarU3 = () => import('../renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/robots.txt', handler: _s0Y6NS, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_eVarU3, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, useStorage as b, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
