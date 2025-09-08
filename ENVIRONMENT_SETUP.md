# 🔧 Настройка Environment для GitHub Pages

## Проблема
```
Branch "main" is not allowed to deploy to github-pages due to environment protection rules.
The deployment was rejected or didn't satisfy other protection rules.
```

## Решение 1: Настройка Environment (Рекомендуется)

### Шаг 1: Создание Environment
1. Перейдите в **Settings** вашего репозитория
2. Найдите раздел **Environments** в левом меню
3. Нажмите **New environment**
4. Название: `github-pages`
5. Нажмите **Configure environment**

### Шаг 2: Настройка Protection Rules
1. **Required reviewers**: Оставьте пустым (или добавьте себя)
2. **Wait timer**: Оставьте 0 минут
3. **Deployment branches**: Выберите **Selected branches**
   - Добавьте `main` в список разрешенных веток
4. Нажмите **Save protection rules**

### Шаг 3: Проверка настроек
- Environment должен быть создан
- Ветка `main` должна быть в списке разрешенных
- Никаких дополнительных ограничений

## Решение 2: Использование простого workflow

Если настройка environment вызывает проблемы, используйте упрощенный workflow:

### Замените текущий workflow:
1. Удалите `.github/workflows/deploy.yml`
2. Переименуйте `.github/workflows/deploy-simple.yml` в `deploy.yml`

### Или обновите существующий workflow:
Замените содержимое `.github/workflows/deploy.yml` на:

```yaml
name: Deploy to GitHub Pages (Simple)

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

## Решение 3: Использование gh-pages (Альтернатива)

Если GitHub Actions продолжают вызывать проблемы, используйте gh-pages:

### Обновите workflow:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Проверка настройки

### После настройки environment:
1. Сделайте коммит и пуш
2. Перейдите в **Actions** вкладку
3. Убедитесь, что workflow выполнился успешно
4. Проверьте сайт

### Если проблемы продолжаются:
1. Проверьте **Settings** > **Pages** - должен быть выбран **GitHub Actions**
2. Проверьте **Settings** > **Actions** > **General** - должны быть включены **Read and write permissions**
3. Убедитесь, что репозиторий публичный

## Полезные ссылки

- [GitHub Environments](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)
- [GitHub Pages Actions](https://github.com/actions/deploy-pages)
- [Environment Protection Rules](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)
