const MainErrors = require('../errors/MainErrors');
const AuthErrors = require('../errors/AuthErrors');

module.exports = {
  login: function (req, res) {
    const params = req.validate({
      'email': ['string', 'email'],
      'password': 'string'
    });

    if (params === false) return res.APIResponse(MainErrors.INVALID_REQUEST, false, {validation: params.data});

    let jwt = sails.config.custom;

    Users.findOne({
      email: req.param('email')
    }).exec(function callback(err, user) {
      if (err) return res.APIResponse(MainErrors.DB_ERROR, false, {});
      if (!user) return res.APIResponse(AuthErrors.NO_REGISTERED, false, {});

      bcrypt.compare(req.param('password'), user.password, function (error, matched) {
        if (error) return res.APIResponse(AuthErrors.INVALID_PASSWORD, false, {});
        if (!matched) return res.APIResponse(AuthErrors.INVALID_PASSWORD, false, {});

        user.jwt = jwt.sign(user.toJSON(), sails.config.custom.jwt_token, {
          expiresIn: '7d'
        });

        return res.APIResponse(MainErrors.OK, false, {user});
      });
    });
  },

  token: function(req, res) {
    Users.findOne(req.user.id).exec(function callback(error, user) {
      if (err) return res.APIResponse(MainErrors.DB_ERROR, false, {});
      if (!user) return res.APIResponse(AuthErrors.NO_REGISTERED, false, {});

      user.jwt = jwt.sign(user.toJSON(), sails.config.custom.jwt_token, {
        expiresIn: '7d'
      });

      return res.APIResponse(MainErrors.OK, false, {user});
    });
  },
};
