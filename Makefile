SHELL := /bin/bash
ENVIRONMENTS_FILE := ./.env

include $(ENVIRONMENTS_FILE)
export

.PHONY: run_spec_dev run_spec run_dev run run_unit install_dependencies run_db stop_db

# runs db + nodemon
run_spec_dev: run_db run_dev

# runs db + node
run_spec: run_db run

# runs nodemon
run_dev: 
	npm run dev

# runs node
run: 
	npm run run

# runs unit test(s)
run_unit:
	npm run test

# installs npm dependencies
install_dependencies:
	npm i

# runs db
run_db: 
	echo "Starting DB"
	docker-compose -f ./database/postgres/compose.yml up -d

#stops db
stop_db:
	echo "Stopping DB"
	docker-compose -f ./database/postgres/compose.yml down
