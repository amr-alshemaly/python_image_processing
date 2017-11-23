$(document).ready(function() {
  var auth0 = new window.auth0.WebAuth({
    clientID: AUTH0_CLIENT_ID,
    domain: AUTH0_DOMAIN,
    scope: "openid email profile",
    responseType: "code",
    redirectUri: AUTH0_CALLBACK_URL
  });

  $('.login').click(function(e) {
    e.preventDefault();
    auth0.authorize();
  });
});
