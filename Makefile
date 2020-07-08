.PHONY: build

default: build

clean:
	rm -fr web/build

node_modules: package.json package-lock.json
	npm install

build: node_modules
	npx encore production
