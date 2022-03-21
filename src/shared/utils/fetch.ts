import { isServer, PORT } from '../consts/env';

const envAwareFetch = (url: string, options?: Record<string, unknown>) => {
  const fetchUrl =
    isServer && url.startsWith('/') ? `http://localhost:${PORT}${url}` : url;

  return fetch(fetchUrl, options).then((res) => res.json());
};

export { envAwareFetch as fetch };
