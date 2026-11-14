# Remix на Deno

Пример приложения [Remix](https://remix.run/) на [Deno](https://deno.com/).

## Параметры деплоя

Выберите рантайм **Deno**, фреймворк **Remix** и тип приложения **frontend**. Для frontend будет опубликована статическая сборка.

| Параметр | Значение |
| --- | --- |
| Фреймворк | Remix |
| Версия Deno | 2.7.14 |
| Тип приложения | `frontend` |
| Команда сборки | `deno task build` |
| Директория сборки | `build/client` |

## <a name="dev"></a>Локальный запуск проекта

```bash
# установка зависимостей
deno install --allow-scripts

# сборка для продакшн
deno task build
```
