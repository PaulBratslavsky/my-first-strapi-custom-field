'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'first-custom-field',
    plugin: 'first-custom-field',
    type: 'string',
  });
};
