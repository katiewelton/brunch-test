module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!app)/,
        'js/app.js': /^(app)/
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^(app\/stylesheets)/
      }
    }
  },
  modules: {
    autoRequire: {
      'js/app.js': ['initialize']
    }
  }
};
