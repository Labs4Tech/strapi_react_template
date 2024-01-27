'use strict';

/**
 * `spa` middleware
 */
const sendfile = require('koa-sendfile')
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In spa middleware.');
    const { request: { path }, res, response } = ctx

    if (ctx.path === "/") {
      await sendfile(ctx, __dirname + '/../../public/index.html')
    }

    await next();

    if (response.status === 404) {
      await sendfile(ctx, __dirname + '/../../public/index.html')
    }

  };
};
