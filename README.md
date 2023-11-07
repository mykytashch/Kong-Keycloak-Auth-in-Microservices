# Kong-Keycloak-Auth-in-Microservices
MVP project full open-source stack for api gateway in microservices and complex user authentication setup

This monorepo contains all the necessary components to set up a microservices architecture with Kong as an API gateway and Keycloak for authentication. It is configured to work with a CRUD application for task management.

## Structure
- `/.github` contains CI/CD workflow configurations using GitHub Actions.
- `/docs` includes the project documentation like architecture and onboarding guides.
- `/packages` has the source code for all services.
  - `/backend-api` is a Node.js backend service with CRUD operations for task management.
  - `/frontend` is a React application to interact with the backend service.
  - `/keycloak-config` contains the realm and client configurations for Keycloak.
- `/infra` contains infrastructure as code configurations for services deployment.
- `/tools` holds various scripts and CLI tools for development and operational tasks.


## Keycloak Configuration Steps

### Step 1: Accessing the Keycloak Admin Console

1. Navigate to the Keycloak admin console URL `http://<keycloak-server>/auth/admin/` in your browser.
2. Log in with the admin credentials you created during the Keycloak installation.

### Step 2: Creating a New Realm

1. Click on the current realm name at the top of the screen (defaults to `Master`).
2. In the dropdown, click on "Add realm".
3. Enter the name for your new realm and click "Create".

### Step 3: Creating a Client

1. Select "Clients" from the left menu and click "Create".
2. Enter a "Client ID" for your application.
3. Choose the appropriate "Client Protocol", typically "openid-connect".
4. Set the "Root URL" to your application's address.
5. Click "Save".

### Step 4: Client Configuration

1. On the client page, go to the "Settings" tab.
2. Enable "Standard Flow" and "Direct Access Grants" if needed for your application.
3. Set "Valid Redirect URIs" to the URL your application will use post-authentication, such as `http://localhost:3000/*`.
4. Configure other settings as necessary, such as "Web Origins" and "Access Type" (usually "confidential" for server applications).
5. Click "Save".

### Step 5: Creating Roles

1. Select "Roles" from the left menu and click "Add Role".
2. Enter a role name and, if needed, a description.
3. Click "Save".
4. Repeat for any additional roles required by your application.

### Step 6: Creating Users

1. Select "Users" from the left menu and click "Add user".
2. Fill in the user information, including "Username".
3. Click "Save".
4. Go to the "Credentials" tab and set a password for the user. Uncheck "Temporary" for a persistent password.
5. Go to the "Role Mappings" tab and assign the roles you created to the user.

### Step 7: Identity Providers and Access Token Configuration

1. Return to your realm settings.
2. Select "Identity Providers" from the left menu and add a provider if you need integration with external authentication services.
3. Configure "Tokens" under "Realm Settings" by setting the lifespan of tokens and other parameters as required by your application.

After completing these steps, your Keycloak will be configured to work with your application, and you can use it for user authentication and authorization. Be sure to use a secure connection (HTTPS) in production environments to ensure the security of authentication data.

## Getting Started
To get started with this project, follow the instructions in the `/docs/onboarding.md` document which will guide you through the process of setting up the development and production environments.

## Database
The backend API interacts with a database to store and manage tasks. The configuration and migration scripts are located within the backend service directory (`/packages/backend-api`).

## Contributions
Contributions are welcome! Please read through the contribution guidelines in `CONTRIBUTING.md` to learn how to contribute to this project.

## License
This project is open source and available under the [MIT License](LICENSE).
