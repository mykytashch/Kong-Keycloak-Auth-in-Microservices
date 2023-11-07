import os

# Определяем структуру каталогов и файлов
repo_structure = {
    'task-manager-universe': {
        '.github': {
            'workflows': {}
        },
        'docs': {
            'architecture.md': '',
            'onboarding.md': '',
        },
        'packages': {
            'backend-api': {
                'src': {
                    'controllers': {},
                    'models': {},
                    'routes': {},
                    'services': {},
                    'utils': {},
                    'middleware': {},
                    'index.js': '',
                },
                'Dockerfile': '',
                'package.json': '',
            },
            'frontend': {
                'public': {},
                'src': {
                    'components': {},
                    'hooks': {},
                    'contexts': {},
                    'services': {},
                    'styles': {},
                    'App.js': '',
                    'index.js': '',
                },
                'Dockerfile': '',
                'package.json': '',
            },
            'keycloak-config': {
                'realm-config.json': '',
                'client-config.json': '',
            },
        },
        'infra': {
            'kubernetes': {},
            'terraform': {},
            'ansible': {},
            'scripts': {},
        },
        'tools': {
            'cli': {},
            'scripts': {},
        },
        '.gitignore': '',
        '.dockerignore': '',
        'package.json': '',
        'README.md': '',
        'lerna.json': '',
    }
}

# Функция для создания каталогов и файлов
def create_repo_structure(base_path, structure):
    for name, content in structure.items():
        path = os.path.join(base_path, name)
        if isinstance(content, dict):
            # Создаем каталог, если это словарь
            os.makedirs(path, exist_ok=True)
            # Рекурсивно создаем вложенные элементы
            create_repo_structure(path, content)
        else:
            # Создаем файл
            with open(path, 'w') as file:
                file.write(content)

# Создаем структуру репозитория
create_repo_structure(os.getcwd(), repo_structure)
