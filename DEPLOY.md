# 🚀 Инструкция по деплою на GitHub Pages

## Настройка репозитория

### 1. Создание репозитория на GitHub

1. Создайте новый репозиторий на GitHub
2. Назовите его `react-sass-mobx` (или любое другое имя)
3. Сделайте репозиторий публичным

### 2. Настройка GitHub Pages

1. Перейдите в **Settings** репозитория
2. Найдите раздел **Pages** в левом меню
3. В разделе **Source** выберите **GitHub Actions**
4. Сохраните настройки

### 3. Настройка base path (если нужно)

Если ваш репозиторий называется не `react-sass-mobx`, обновите `base` в `vite.config.ts`:

```typescript
export default defineConfig({
  base: "/your-repo-name/", // Замените на имя вашего репозитория
  // ... остальная конфигурация
});
```

## Автоматический деплой

### Через GitHub Actions

1. Загрузите код в репозиторий:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. GitHub Actions автоматически:
   - Соберет проект
   - Задеплоит на GitHub Pages
   - Сделает сайт доступным по адресу: `https://your-username.github.io/react-sass-mobx/`

### Проверка деплоя

1. Перейдите в **Actions** вкладку репозитория
2. Убедитесь, что workflow выполнился успешно
3. Проверьте сайт по ссылке из **Settings > Pages**

## Ручной деплой

### Через npm скрипт

```bash
npm run deploy
```

Этот скрипт:

1. Соберет проект (`npm run build`)
2. Загрузит файлы в ветку `gh-pages`
3. GitHub Pages автоматически обновит сайт

### Через GitHub CLI (альтернатива)

```bash
# Установка GitHub CLI
npm install -g @github/cli

# Авторизация
gh auth login

# Деплой
gh-pages -d dist
```

## Структура файлов для деплоя

```
.github/workflows/deploy.yml  # GitHub Actions workflow
vite.config.ts               # Конфигурация с base path
package.json                 # Скрипты для деплоя
dist/                        # Собранные файлы (создается автоматически)
```

## Возможные проблемы

### 1. 404 ошибка на GitHub Pages

**Причина**: Неправильный base path
**Решение**: Проверьте `base` в `vite.config.ts`

### 2. Стили не загружаются

**Причина**: Проблемы с путями к CSS файлам
**Решение**: Убедитесь, что `base` настроен правильно

### 3. GitHub Actions не запускается

**Причина**: Неправильные права доступа
**Решение**:

1. Убедитесь, что репозиторий публичный
2. Проверьте настройки Pages в Settings

### 4. Сайт не обновляется

**Причина**: Кеширование
**Решение**:

1. Очистите кеш браузера (Ctrl+F5)
2. Подождите 5-10 минут для обновления GitHub Pages

## Полезные ссылки

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [gh-pages package](https://www.npmjs.com/package/gh-pages)

## Команды для быстрого деплоя

```bash
# Полный цикл деплоя
npm run build && npm run deploy

# Или через GitHub Actions (рекомендуется)
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```
