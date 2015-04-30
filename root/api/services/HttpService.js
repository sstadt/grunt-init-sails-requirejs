module.exports = {
  getHost: function () {
    return (sails.config.environment === 'production') ? sails.config.globals.site.host : 'localhost:1337';
  }
};