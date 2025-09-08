#!/bin/bash

# Скрипт для исправления проблем с деплоем

echo "🔧 Исправляем проблемы с деплоем GitHub Pages..."

# Проверяем, что мы в git репозитории
if [ ! -d ".git" ]; then
    echo "❌ Ошибка: Это не git репозиторий"
    exit 1
fi

echo "📝 Коммитим исправления..."
git add .
git commit -m "Fix GitHub Pages deployment - remove environment protection rules"

echo "📤 Пушим изменения..."
git push origin main

echo "✅ Исправления загружены!"
echo ""
echo "📋 Что было исправлено:"
echo "  - Убран environment из workflow"
echo "  - Упрощен процесс деплоя"
echo "  - Добавлены SPA файлы (404.html, _redirects)"
echo ""
echo "🌐 Проверьте деплой:"
echo "  - Actions: https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^.]*\).*/\1/')/actions"
echo "  - Pages: https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^.]*\).*/\1/')/settings/pages"
echo ""
echo "⏳ Дождитесь завершения деплоя (обычно 2-3 минуты)"
