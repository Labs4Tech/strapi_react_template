'use strict';

/**
 * `spa` middleware
 */
const sendfile = require('koa-sendfile')
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In spa middleware.');
    await next();
    const { request: { path }, res, response } = ctx
    if (path === "index.html" || response.status === 404) {
      await sendfile(ctx, __dirname + '/../../public/index.html')
    }
  };
};
