'use strict';

/**
 * p-data service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::p-data.p-data');
