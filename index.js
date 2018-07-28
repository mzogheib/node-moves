const oauth = require('./api/oauth');
const user = require('./api/user');

module.exports = class NodeMoves {
  constructor({ client_id, client_secret, redirect_uri }) {
    this.oauth = {
      url: () => oauth.url({ client_id, redirect_uri }),
      token: ({ code }) => oauth.token({ code, client_id, client_secret, redirect_uri }),
      refresh: ({ refresh_token }) => oauth.refresh({ client_id, client_secret, refresh_token })
    }
    this.user = user;
  }
}
