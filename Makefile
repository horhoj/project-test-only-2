#all
docker-up: docker-down
	docker-compose up -d --build

docker-log: docker-down
	docker-compose up --build

docker-down:
	docker-compose stop
	docker-compose down

permission-755:
	sudo chmod -R 755 ./src/

permission-777:
	sudo chmod -R 777 ./src/

console:
	docker-compose exec --user $(shell id -u):$(shell id -g)  node sh -c "/bin/bash"

dev:
	docker-compose exec --user $(shell id -u):$(shell id -g)  node sh -c "npm run start"

prod:
	docker-compose exec --user $(shell id -u):$(shell id -g)  node sh -c "npm run build"

install:
	docker-compose exec --user $(shell id -u):$(shell id -g)  node sh -c "npm i"

lint-check:
	docker-compose exec --user $(shell id -u):$(shell id -g)  node sh -c "npm run lint-check"

lint-fix:
	docker-compose exec --user $(shell id -u):$(shell id -g)  node sh -c "npm run lint-fix"

test:
	docker-compose exec --user $(shell id -u):$(shell id -g)  node sh -c "npm run test"

ddev: docker-up install dev

init: docker-up install prod
