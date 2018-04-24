# Makefile generated by /usr/bin/verse

PERL5LIB :=

build:
	rm -rf htdocs
	./bin/verse build

demo: build
	./bin/verse run

local:
	rm -rf htdocs
	./bin/verse build --local

check:
	linkchecker htdocs/index.html  --no-follow-url=http:/

staging:
	cf push -f cf/manifest-stage.yml
prod:
	cf push -f cf/manifest.yml
