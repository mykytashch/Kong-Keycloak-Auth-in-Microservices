# Kong-Keycloak-Auth-in-Microservices
MVP project full open-source stack for api gateway in microservices and complex user authentication setup


/task-manager-universe              # Пример названия для монорепозитория
  /.github                          # Конфигурации GitHub Actions для CI/CD
    workflows                        # Определение рабочих процессов CI/CD
  /docs                             # Документация проекта
    architecture.md                  # Описание архитектуры
    onboarding.md                    # Информация для новых разработчиков
  /packages                         # Исходный код для каждого пакета/сервиса
    /backend-api                     # Бэкенд для API
      /src                          # Исходный код
        /controllers                # Контроллеры для обработки запросов
        /models                     # Модели данных
        /routes                     # Маршрутизация запросов
        /services                   # Сервисы бизнес-логики
        /utils                      # Утилиты
        /middleware                 # Промежуточное ПО
        index.js                    # Точка входа для бэкенда
      Dockerfile                     # Dockerfile для контейнеризации бэкенда
      package.json                   # Node.js зависимости и скрипты
    /frontend                       # Фронтенд приложение
      /public                       # Публичные файлы
      /src                          # Исходный код React
        /components                 # React компоненты
        /hooks                      # React хуки
        /contexts                   # React контексты
        /services                   # Сервисы для работы с API
        /styles                     # Стили CSS/SCSS
        App.js                      # Корневой компонент приложения
        index.js                    # Точка входа в приложение
      Dockerfile                     # Dockerfile для фронтенда
      package.json                   # React зависимости и скрипты
    /keycloak-config                # Конфигурация для Keycloak
      realm-config.json             # Конфигурация реалма
      client-config.json            # Конфигурация клиента
  /infra                            # Инфраструктура
    /kubernetes                     # Конфигурации Kubernetes
    /terraform                      # Конфигурации Terraform для инфраструктуры
    /ansible                        # Ansible плейбуки для настройки серверов
    /scripts                        # Скрипты для деплоя и управления инфраструктурой
  /tools                            # Инструменты и утилиты для разработки
    /cli                            # Кастомные CLI инструменты для разработчиков
    /scripts                        # Скрипты для локальной разработки и тестирования
  .gitignore                        # Исключения Git
  .dockerignore                     # Исключения Docker
  package.json                      # Управление скриптами и зависимостями для монорепозитория
  README.md                         # Основная информация и гайд по монорепозиторию
  lerna.json                        # Конфигурация Lerna для управления мульти-пакетами
