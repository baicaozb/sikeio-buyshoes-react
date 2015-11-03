.PHONY: js
js:
	webpack --watch --progress -d


.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js, build/app.js'


.PHONY: clean
clean:
	rm -r bundle


.PHONY: all
all:
	(make css & make js & make server & wait)
