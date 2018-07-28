const querystring = require('querystring');
const http = require('../../http');
const { baseOauthUrl } = require('../config');

const url = ({ client_id, redirect_uri }) => {
  const params = { client_id, response_type: 'code', redirect_uri, scope: 'activity location' };
  return `${baseOauthUrl}/authorize?${querystring.stringify(params)}`;
}

const token = ({ code, client_id, client_secret, redirect_uri }) => {
  const params = { code, grant_type: 'authorization_code', client_id, client_secret, redirect_uri };
  return http.post({ baseUrl: baseOauthUrl, url: `/access_token?${querystring.stringify(params)}` });
}

const refresh = ({ client_id, client_secret, refresh_token }) => {
  const params = { grant_type: 'refresh_token', client_id, client_secret, refresh_token };
  return http.post({ baseUrl: baseOauthUrl, url: `/access_token?${querystring.stringify(params)}` });
}

module.exports = {
  url,
  token,
  refresh
};
