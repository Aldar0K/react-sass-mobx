# 🧪 Тестирование SPA на GitHub Pages

## Проблема

URL `https://aldar0k.github.io/companies/12` не работает после перезагрузки (F5).

## Что было исправлено

### 1. Обновлен `public/404.html`

- Изменен `pathSegmentsToKeep` с `0` на `1`
- Теперь учитывается base path `/react-sass-mobx/`
- Правильно обрабатываются маршруты вида `/companies/12`

### 2. Как это работает

1. Пользователь заходит на `https://aldar0k.github.io/companies/12`
2. GitHub Pages ищет файл `/companies/12/index.html` (не существует)
3. GitHub Pages возвращает `404.html`
4. `404.html` перенаправляет на `/react-sass-mobx/?/companies/12`
5. `index.html` обрабатывает параметр и восстанавливает маршрут
6. React Router получает правильный маршрут `/companies/12`

## Тестирование

### После деплоя проверьте:

1. **Прямой переход**: `https://aldar0k.github.io/companies/12`
   - ✅ Должен работать с первого раза

2. **Обновление страницы (F5)**:
   - ✅ Должен остаться на той же странице
   - ✅ Не должно быть 404 ошибки

3. **Навигация через приложение**:
   - ✅ Переходы между страницами должны работать
   - ✅ Кнопка "Назад" в браузере должна работать

4. **Прямые ссылки**:
   - ✅ `https://aldar0k.github.io/` - главная страница
   - ✅ `https://aldar0k.github.io/companies/12` - страница компании

## Отладка

### Если проблема остается:

1. **Проверьте консоль браузера**:
   - Откройте DevTools (F12)
   - Перейдите на вкладку Console
   - Обновите страницу
   - Ищите ошибки JavaScript

2. **Проверьте Network вкладку**:
   - Откройте DevTools (F12)
   - Перейдите на вкладку Network
   - Обновите страницу
   - Проверьте статус ответов (должны быть 200, не 404)

3. **Проверьте файлы на сервере**:
   - `https://aldar0k.github.io/404.html` - должен существовать
   - `https://aldar0k.github.io/index.html` - должен существовать

## Альтернативные решения

### Если проблема продолжается:

1. **Использование Hash Router**:

   ```typescript
   // В AppRouter.tsx замените BrowserRouter на HashRouter
   import { HashRouter } from 'react-router-dom';

   <HashRouter>
     <Routes>
       {/* ваши маршруты */}
     </Routes>
   </HashRouter>
   ```

2. **Проверка base path**:
   ```typescript
   // В vite.config.ts убедитесь, что base правильный
   export default defineConfig({
     base: "/react-sass-mobx/",
     // ...
   });
   ```

## Команды для тестирования

```bash
# Локальное тестирование
npm run build
npm run preview

# Проверка файлов
ls -la dist/ | grep -E "(404|_redirects|index)"

# Деплой
npm run deploy
```

## Ожидаемый результат

После исправления:

- ✅ Все URL работают с первого раза
- ✅ Обновление страницы (F5) работает корректно
- ✅ Навигация "Назад/Вперед" работает
- ✅ Прямые ссылки работают
- ✅ Нет 404 ошибок
