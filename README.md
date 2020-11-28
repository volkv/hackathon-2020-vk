![Россия](https://leadersofdigital.ru/89e34a592e531d209b4a83f1fb649425.svg)
[<img width="134" src="https://vk.com/images/apps/mini_apps/vk_mini_apps_logo.svg">](https://vk.com/services) 

# Команда Киборги - Кейс ВК

### Разработать мини-приложение, базирующееся на платформе VK Mini Apps социальной сети ВКонтакте, которое поможет пользователю в решении повседневных социальных задач, связанных с игровой индустрией, и дополнит «суперприложение» ВКонтакте
_Киберспорт \\ Digital_

# Live Vk-Mini-App *VK.Киберспорт* 
# https://vk.com/app7680133 🎮

## Функционал:

* Киберспортивный Матч Центр с календарем и фильтрами
* Реальные киберспортивные данные от поставщика AbiosGaming API (игры: Dota 2, CS:GO, Legaue of Legends)
* Статистика матча, трансляция, возможность написать прогноз на матч

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

> GET https://vk.test:8080/api/v1/series{params} 

Params: game[1,2,5] | page[int] | starts_after[timestamp] | starts_before[timestamp]

Ex: https://vk-cyber.volkv.com/api/v1/series?game=1

> GET https://vk.test:8080/api/v1/series/{id}

Params: id[int]

Ex: https://vk-cyber.volkv.com/api/v1/series/258975
