import fastify from "fastify";

const DEFAULT_OPTIONS = {
  logger: true,
};

export const createApplication = (opts: Record<string, unknown> = {}) => {
  const app = fastify({...DEFAULT_OPTIONS, ...opts});

  // TODO: add 'routes'

  return app;
};
