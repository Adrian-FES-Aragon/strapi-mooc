'use strict';

/**
 * special service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::special.special');
