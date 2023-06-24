# Проект автоматизированного тестирования приложения MyRetro
## Описание
Содержит автотесты для приложения [MyRetro](https://myretro-stg.tochkavhoda.ru/) - приложение для проведения ретроспективных сессий.
Автоматизированные тесты созданы в рамках обучающего курса по специальноси “Инженер по тестированию ПО” от Школы SmartUp.

## Технологии
Фреймворк [Playwright](https://playwright.dev/) на языке TypeScript.

## Тестовое покрытие
**E2E тесты (/tests/e2e)**
1.	Login / Logout
2.	Профиль пользователя
3.	Меню “Мои доски”
4.	Создание доски
5.	Работа с доской

На текущий момент тестами покрыты только базовые сценарии перечисленных функциональностей. Для каждой функциональности требуется расширение тестового покрытия. 
Цель - автоматизировать все проверки, относящиеся к smoke-тестированию согласно тестовой документации.

**API тесты (tests/api)**
1. Post/boards
2. Delete/boards/{boardId}
3. Get/me
4. Get /templates
5. Post /cards
6. Delete /cards/{cardId}
В планах покрыть автотестами все эндпоинты согласно документации [Swagger](https://myretro-stg.tochkavhoda.ru/api/docs).

## локальная настройка проекта

1.	Установить [Node.js](https://nodejs.org/en) и менеджер пакетов npm

2.	Клонировать этот репозиторий и открыть его в VS Code

3.	Выполнить в терминале VS Code следующие команды для установки Playwright:

```
$ npm install @playwright/test
$ npx playwright install
```
## Запуск тестов

Запуск тестов производится локально. В планах настроить GitLab пайплайн для запуска тестов централизованно.

- Запуск всех тестов (в режиме headless по умолчанию):
```
npx playwright test
```
- Запуск тестов в headfull режиме (т.е. с запуском браузера):
```
npx playwright test --headed
```
- Запуск тестов во всех браузерах в headless режиме:
```
npx playwright test --browser=all
```
- Запуск в Firefox браузере в headfull режиме:
```
npx playwright test --browser=firefox --headed
```
- Запуск конкретного файла с тестами:
```
npx playwright test tests/example.spec.ts
