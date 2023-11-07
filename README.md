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

## Getting Started
To get started with this project, follow the instructions in the `/docs/onboarding.md` document which will guide you through the process of setting up the development and production environments.

## Database
The backend API interacts with a database to store and manage tasks. The configuration and migration scripts are located within the backend service directory (`/packages/backend-api`).

## Contributions
Contributions are welcome! Please read through the contribution guidelines in `CONTRIBUTING.md` to learn how to contribute to this project.

## License
This project is open source and available under the [MIT License](LICENSE).
