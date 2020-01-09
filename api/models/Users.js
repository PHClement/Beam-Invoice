/**
 * Users.js
 *
 * @description :: Users models for auth and users management.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    firstName: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 30,
      example: 'Jean'
    },

    name: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 40,
      example: 'Dupont'
    },

    email: {
      type: 'string',
      required: true,
      isEmail: true,
      example: 'contact@beam.io'
    },

    picture: {
      type: 'string',
      required: false
    },

    lastSeenAt: {
      type: 'number',
      description: 'Dernière connexion de l\'utilisateur en timestamp.',
      example: 1502844074211
    },

    permissions: {
      type: 'number',
      defaultsTo: false
    },

    apiToken: {
      type: 'string',
      description: 'API Token de l\'utilisateur.',
      required: true,
      unique: true,
      example: 'n8Z4QBr8He5IujCSNAU1t6Da3ihUpRjEwyt1ScLxnRO39GJdr5G9lve'
    },

    jwt: {
      type: 'string',
      description: 'Token JWT de l\'utilisateur.',
      example: 'n8Z4QBr8He5IujCSNAU1t6Da3ihUpRjEwyt1ScLxnRO39GJdr5G9lve'
    },

    isDeleted: {
      type: 'boolean',
      defaultTo: false
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

  customToJSON: function() {
    return _.omit(this, ['apiToken'])
  },

};
