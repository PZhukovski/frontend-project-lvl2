install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .
	
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8

start:
	node src/bin/gendiff.js file1.json file2.json

jest-watch: 
	NODE_OPTIONS=--experimental-vm-modules npx jest --bail --watch

