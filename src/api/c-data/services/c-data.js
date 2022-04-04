'use strict';

/**
 * c-data service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::c-data.c-data');
