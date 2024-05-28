'use strict';

/**
 * food-additive service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-additive.food-additive');
