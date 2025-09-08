#!/bin/bash

# Скрипт для исправления проблем с environment

echo "🔧 Исправляем проблемы с environment для GitHub Pages..."

# Проверяем, что мы в git репозитории
if [ ! -d ".git" ]; then
    echo "❌ Ошибка: Это не git репозиторий"
    exit 1
fi

echo "📝 Коммитим исправления..."
git add .
git commit -m "Fix GitHub Pages deployment - add environment configuration"

echo "📤 Пушим изменения..."
git push origin main

echo "✅ Исправления загружены!"
echo ""
echo "📋 Что было исправлено:"
echo "  - Добавлен environment: github-pages"
echo "  - Настроен URL для environment"
echo "  - Добавлен id для deployment step"
echo ""
echo "🔧 Следующие шаги:"
echo "  1. Перейдите в Settings > Environments"
echo "  2. Создайте environment 'github-pages'"
echo "  3. Разрешите ветку 'main' для деплоя"
echo "  4. Дождитесь завершения деплоя"
echo ""
echo "🌐 Проверьте деплой:"
echo "  - Actions: https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^.]*\).*/\1/')/actions"
echo "  - Pages: https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^.]*\).*/\1/')/settings/pages"
echo ""
echo "⏳ Дождитесь завершения деплоя (обычно 2-3 минуты)"
