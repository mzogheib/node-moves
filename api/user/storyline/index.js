const http = require('../../../http');
const { baseApiUrl } = require('../../config');

module.exports = {
  get: ({ date, week, month, from, to, pastDays = 1, trackPoints, access_token }) => {
    if (date) {
      return http.get({ baseUrl: baseApiUrl, url: `/user/storyline/daily/${date}`, headers: { Authorization: `Bearer ${access_token}` }, params: { trackPoints } })
    } else if (week) {
      return http.get({ baseUrl: baseApiUrl, url: `/user/storyline/daily/${week}`, headers: { Authorization: `Bearer ${access_token}` }, params: { trackPoints } })
    } else if (month) {
      return http.get({ baseUrl: baseApiUrl, url: `/user/storyline/daily/${month}`, headers: { Authorization: `Bearer ${access_token}` }, params: { trackPoints } })
    } else if (from && to) {
      return http.get({ baseUrl: baseApiUrl, url: '/user/storyline/daily', headers: { Authorization: `Bearer ${access_token}` }, params: { from, to, trackPoints } })
    } else {
      return http.get({ baseUrl: baseApiUrl, url: `/user/storyline/daily/${pastDays}`, headers: { Authorization: `Bearer ${access_token}` }, params: { trackPoints } })
    }
  }
}
