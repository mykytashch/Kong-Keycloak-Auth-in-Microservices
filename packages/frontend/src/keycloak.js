// src/keycloak.js

import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'KEYCLOAK_URL', // URL сервера Keycloak
  realm: 'YOUR_REALM', // Имя реалма
  clientId: 'YOUR_CLIENT_ID', // ID клиента
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
