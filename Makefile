default: build

setup:
	npm install

template:
	gulp

build:
	hugo

staging:
	cf push -f manifest-stage.yml

publish:
	cf push -f manifest.yml

dev: template
	hugo server -D 