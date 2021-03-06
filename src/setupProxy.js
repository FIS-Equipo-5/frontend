const proxy = require('http-proxy-middleware');


const API_TRANSFERS_URL = (process.env.TRANSFERS_URL || 'http://localhost:3000');
const API_TEAMS_PLAYER_URL = (process.env.TEAMS_URL || 'http://localhost:3001');
const API_TOURNAMENTS_URL = (process.env.TOURNAMENT_URL || 'http://localhost:3002');
const API_AUTH_URL = (process.env.AUTH_URL || 'http://localhost:3003');


module.exports = function(app) {
  app.use(proxy('/api/v1/tournaments/', {target: API_TOURNAMENTS_URL, changeOrigin: true}));
  app.use(proxy('/api/v1/tournament/', {target: API_TOURNAMENTS_URL, changeOrigin: true}));
  app.use(proxy('/api/v1/tournament', {target: API_TOURNAMENTS_URL, changeOrigin: true}));

  app.use(proxy('/api/v1/transfers', {target: API_TRANSFERS_URL, changeOrigin: true}));
  app.use(proxy('/api/v1/transfer/', {target: API_TRANSFERS_URL, changeOrigin: true}));
  app.use(proxy('/api/v1/transfer', {target: API_TRANSFERS_URL, changeOrigin: true}));

  // ========= TEAMS ============
  app.use(proxy('/api/v1/teams', {target: API_TEAMS_PLAYER_URL, changeOrigin: true}));
  app.use(proxy('/api/v1/players', {target: API_TEAMS_PLAYER_URL, changeOrigin: true}));
  app.use(proxy('/api/v1/team', {target: API_TEAMS_PLAYER_URL, changeOrigin: true}));
  app.use(proxy('/api/v1/player', {target: API_TEAMS_PLAYER_URL, changeOrigin: true}));
  app.use(proxy('/api/v1/team/', {target: API_TEAMS_PLAYER_URL, changeOrigin: true}));
  app.use(proxy('/api/v1/player/', {target: API_TEAMS_PLAYER_URL, changeOrigin: true}));


  // ========= TOURNAMENTS ============
  app.use(proxy('/api/v1/matches', {target: API_TOURNAMENTS_URL, changeOrigin: true}));
  app.use(proxy('/api/v1/matches/', {target: API_TOURNAMENTS_URL, changeOrigin: true}));
  app.use(proxy('/api/v1/match/', {target: API_TOURNAMENTS_URL, changeOrigin: true}));

  // ========= AUTH ============
  app.use(proxy('/api/v1/users/authenticate', {target: API_AUTH_URL, changeOrigin: true}));
  app.use(proxy('/api/v1/users/register', {target: API_AUTH_URL, changeOrigin: true}));
};