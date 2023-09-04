
## Настройка проекта через docker compose
* Выполните команду в корне проекта:
```sh
cp .env.example .env
```
* Для того что бы запустить проект, вам необходимо иметь docker и docker-compose. 
* Убедитесь в том что ваш порт `5173` не занят. 
* Если все же вам нужно поменять номер порта, то отредактируйте файл `.env`, 
  заменив значение переменной `EXTERNAL_PORT` на тот номер порта, который вам нужен. 
* Выполните команду:
```sh
docker-compose up -d
```
* Если порт не был изменен то перейдите по ссылке: [http://localhost:5173](http://localhost:5173)
* Если все же порт был изменен, то в ссылке поменяйте номер порта на тот который вам нужен и перейдите по ссылке