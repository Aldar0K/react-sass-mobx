# 🔧 Исправление проблемы с SPA на GitHub Pages

## Проблема

После обновления страницы (F5) приложение не работает и показывает 404 ошибку.

## Причина

GitHub Pages не настроен для работы с Single Page Application (SPA). При обновлении страницы сервер ищет файл по пути, которого не существует.

## Решение

### 1. Файл `public/404.html`

- GitHub Pages использует этот файл для всех 404 ошибок
- Содержит JavaScript код для перенаправления на `index.html`
- Сохраняет текущий маршрут в URL

### 2. Обновленный `index.html`

- Содержит скрипт для обработки перенаправлений
- Восстанавливает правильный маршрут после перенаправления

### 3. Файл `public/_redirects`

- Альтернативное решение для некоторых хостингов
- Перенаправляет все запросы на `index.html`

## Как это работает

1. Пользователь обновляет страницу `/companies/12`
2. GitHub Pages ищет файл `/companies/12/index.html` (не существует)
3. GitHub Pages возвращает `404.html`
4. `404.html` перенаправляет на `/index.html?/companies/12`
5. `index.html` обрабатывает параметр и восстанавливает маршрут
6. React Router получает правильный маршрут и отображает нужную страницу

## Тестирование

### Локально:

```bash
npm run build
npm run preview
```

### На GitHub Pages:

1. Загрузите изменения в репозиторий
2. Дождитесь деплоя
3. Откройте сайт
4. Перейдите на любую страницу
5. Нажмите F5 (обновление)
6. Страница должна остаться той же

## Файлы для SPA

```
public/
├── 404.html          # Перенаправление для 404 ошибок
├── _redirects        # Альтернативное решение
└── index.html        # Главная страница с обработкой маршрутов
```

## Альтернативные решения

### 1. Использование Hash Router

```typescript
// Вместо BrowserRouter используйте HashRouter
import { HashRouter } from 'react-router-dom';

<HashRouter>
  <App />
</HashRouter>
```

### 2. Настройка сервера

Если у вас есть контроль над сервером, настройте его для перенаправления всех запросов на `index.html`.

## Полезные ссылки

- [GitHub Pages SPA Guide](https://github.com/rafgraph/spa-github-pages)
- [React Router Deployment](https://reactrouter.com/en/main/routers/create-browser-router)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
