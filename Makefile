default: build

setup:
	npm install

build:
	gulp
	# right now we are concatenating to libs.js, but not using it
	# so copy over libs/ for now.  FIXME
	rm -rf public/libs
	cp -a src/libs public/libs
