### ![Россия](https://leadersofdigital.ru/89e34a592e531d209b4a83f1fb649425.svg) Цифровой прорыв 2020

# Команда Киборги - Кейс ВК

### Разработать мини-приложение, базирующееся на платформе VK Mini Apps социальной сети ВКонтакте, которое поможет пользователю в решении повседневных социальных задач, связанных с игровой индустрией, и дополнит «суперприложение» ВКонтакте

_Киберспорт \\ Digital_

![VK.Кибер](https://vk-cyber.volkv.com/media/vk-cyber-logo.jpg)

# Готовое решение

# [<img width="134" src="https://vk.com/images/apps/mini_apps/vk_mini_apps_logo.svg">](https://vk.com/app7680133) https://vk.com/app7680133 🎮

## Функционал:

* Киберспортивный Матч Центр с календарем и фильтрами. Список матчей, турниров. Счет, время начала, составы команд на матч, логотипы
* Реальные киберспортивные данные от поставщика AbiosGaming API (игры: Dota 2, CS:GO, Legaue of Legends)
* Возможность добавить матч в избранное [VK.storage] (и получать уведомления [wip] за 30 минут до начала)
* Возможность поделиться матчем у себя в ленте / ЛС
* Трансляция матча в плеере ВК [заглушка]
* Детальная статистика матча [заглушка]
* Турнирные сетки [заглушка]

### Планы развития:

* Уникальный рейтинг команд VK.КиберРейтинг (имея данные о всех матчах мы можем оценвать рейтинг команд, напр. по системе ELO)

## Stack

* Laravel `8.12`
* PostgreSQL `13`
* Nginx `1.19.3`
* Redis `6.0.9`
* ElasticSearch `7.9.3`
* React `16.14`
* VKUI / VKBridge

## Технологии

* Docker / Compose
* Очереди Redis
* Кэш Redis
* Планировщик Laravel
* Events / Notification Channels

## Локальный запуск (Linux / macOS):

### Зависимости

* git (`apt install git`)
* make (`apt install make`)
* docker ([установка](https://docs.docker.com/engine/install/))
* docker-compose ([установка](https://docs.docker.com/compose/install/))

### Сборка

* `cp .env.exmaple .env`
* `make install`

Успех. Сервер запущен и доступен по адресу: https://vk.test:8080

## Методы API

### Список матчей
> GET /api/v1/series{params}

Params: game `[1,2,5]` | page `[int]` | starts_after `[timestamp]` | starts_before `[timestamp]`

Ex: https://vk-cyber.volkv.com/api/v1/series?game=1
### Список турниров
> GET /api/v1/tournaments{params}

Params: game `[1,2,5]` | page `[int]` | starts_after `[timestamp]`

Ex: https://vk-cyber.volkv.com/api/v1/tournaments?game=1
### Информация по матчу
> GET /api/v1/series/{id}

Params: id `[int]`

Ex: https://vk-cyber.volkv.com/api/v1/series/258975
### Информация по турниру
> GET /api/v1/tournament/{id}

Params: id `[int]`

Ex: https://vk-cyber.volkv.com/api/v1/tournament/5168
