const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-664058.okta.com',
  token: '00VdT-r7-wQ8XTUpxWsLGNZe3vcxpBjrl6arf7THnA'
});

module.exports = client;