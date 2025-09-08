# 🔧 Настройка GitHub для деплоя

## Проблема с правами доступа

Если вы видите ошибку:
```
remote: Permission to username/react-sass-mobx.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/username/react-sass-mobx.git/': The requested URL returned error: 403
```

Это означает, что GitHub Actions не имеет прав для записи в репозиторий.

## Решение 1: Настройка через GitHub UI (Рекомендуется)

### Шаг 1: Включите GitHub Pages
1. Перейдите в **Settings** вашего репозитория
2. Найдите раздел **Pages** в левом меню
3. В разделе **Source** выберите **GitHub Actions**
4. Сохраните настройки

### Шаг 2: Настройте Environment
1. В **Settings** найдите раздел **Environments**
2. Создайте новый environment с именем `github-pages`
3. В настройках environment:
   - Включите **Required reviewers** (если нужно)
   - Включите **Wait timer** (если нужно)
   - В разделе **Environment protection rules** добавьте правило **Required reviewers**

### Шаг 3: Настройте Actions permissions
1. В **Settings** найдите раздел **Actions** > **General**
2. В разделе **Workflow permissions** выберите **Read and write permissions**
3. Включите **Allow GitHub Actions to create and approve pull requests**
4. Сохраните изменения

## Решение 2: Использование Personal Access Token

### Шаг 1: Создайте Personal Access Token
1. Перейдите в **Settings** вашего профиля GitHub
2. Найдите раздел **Developer settings** > **Personal access tokens** > **Tokens (classic)**
3. Нажмите **Generate new token** > **Generate new token (classic)**
4. Настройте токен:
   - **Note**: `GitHub Pages Deploy`
   - **Expiration**: `90 days` (или больше)
   - **Scopes**: выберите `repo` (полный доступ к репозиторию)
5. Скопируйте токен

### Шаг 2: Добавьте токен в Secrets
1. В репозитории перейдите в **Settings** > **Secrets and variables** > **Actions**
2. Нажмите **New repository secret**
3. Название: `PERSONAL_ACCESS_TOKEN`
4. Значение: вставьте скопированный токен
5. Сохраните

### Шаг 3: Обновите workflow
Замените в `.github/workflows/deploy.yml`:
```yaml
github_token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
```

## Решение 3: Использование нового workflow (Рекомендуется)

Используйте файл `.github/workflows/deploy-fix.yml` - он использует современный подход GitHub Pages с правильными правами доступа.

### Как использовать:
1. Удалите старый workflow: `.github/workflows/deploy.yml`
2. Переименуйте новый: `mv .github/workflows/deploy-fix.yml .github/workflows/deploy.yml`
3. Загрузите изменения в репозиторий

## Проверка настройки

После настройки:
1. Сделайте коммит и пуш в ветку `main`
2. Перейдите в **Actions** вкладку репозитория
3. Убедитесь, что workflow выполнился успешно
4. Проверьте сайт по ссылке из **Settings** > **Pages**

## Полезные ссылки

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Permissions](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)
- [Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Команды для быстрого исправления

```bash
# Удалить старый workflow
rm .github/workflows/deploy.yml

# Переименовать новый workflow
mv .github/workflows/deploy-fix.yml .github/workflows/deploy.yml

# Загрузить изменения
git add .
git commit -m "Fix GitHub Pages deployment permissions"
git push origin main
```
