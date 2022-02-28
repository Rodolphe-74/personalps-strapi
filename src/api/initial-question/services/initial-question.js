'use strict';

/**
 * initial-question service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::initial-question.initial-question');
