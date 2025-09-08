#!/bin/bash

# Скрипт для быстрого деплоя на GitHub Pages

echo "🚀 Начинаем деплой на GitHub Pages..."

# Проверяем, что мы в git репозитории
if [ ! -d ".git" ]; then
    echo "❌ Ошибка: Это не git репозиторий"
    exit 1
fi

# Проверяем, что есть изменения для коммита
if [ -z "$(git status --porcelain)" ]; then
    echo "ℹ️  Нет изменений для коммита"
else
    echo "📝 Коммитим изменения..."
    git add .
    git commit -m "Deploy to GitHub Pages"
fi

# Пушим изменения
echo "📤 Пушим изменения в main..."
git push origin main

# Ждем немного для GitHub Actions
echo "⏳ Ждем выполнения GitHub Actions..."
sleep 10

# Показываем ссылку на сайт
REPO_NAME=$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^.]*\).*/\1/')
echo "✅ Деплой завершен!"
echo "🌐 Сайт будет доступен по адресу: https://${REPO_NAME}.github.io/"
echo "📊 Проверьте статус деплоя: https://github.com/${REPO_NAME}/actions"
