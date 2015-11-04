## Intro

AngularJS ist derzeit eines der modernsten Frameworks, um Web Anwendungen zu erstellen.
Nichts desto trotz ist es schwer zu lernen. Um AngularJS richtig einzusetzen, muss man das Framework verstehen.

## Lesenswert

### Automatisierung mit gulp

- [Gulp setup for AngularJS Projects](http://paislee.io/a-healthy-gulp-setup-for-angularjs-projects/)

### Authentifizierung
- [Token based authentication](http://code.tutsplus.com/tutorials/token-based-authentication-with-angularjs-nodejs--cms-22543)

### Template Chaching
- [Unique Requests for Templates](http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine/30267216#30267216)

## Plugins

- [ng-inspector](https://chrome.google.com/webstore/detail/ng-inspector-for-angularj/aadgmnobpdmgmigaicncghmmoeflnamj)

## Ziel

- Basiskonzepte von Angular verstehen.
- Beispiele verstehen, um sie im praktischen Umfeld einsetzen zu können.

### Normalization

Aus result-link-href wird resultLinkHref. Konvertieren eines Strings in einen anderen konsistenten Standard (hier: 'dashed' <=> 'camelCase').

## Welche Probleme AngularJS zu lösen versucht

Das Entwickeln von Webapplikation erfordert im Javascrtipt die Verwaltung DOM-Events und eigener Javascrtipt-Logik.
Diese beiden Komponenten erfordern mit wachsender Komplexität der Anwendung einen immer höher werdenden Wartungsaufwand.
Das führt mit der Zeit zu Unübersichtlichkeit. Das kann soweit gehen, dass man sich im JS-Code verliert.
Hier setzen Frameworks, wie AngularJS an.

- Änderungen in JS sollen automatisch im DOM repräsentiert werden.
- Ändeurngne im DOM sollen automatisch Verhalten im JS auslösen.

## .tern-project

Diese Datei wird durch das Plugin atom-ternjs (Editor atom) ausgelesen, um Autocomplete-Vorschläge für javascript (insbesondere angular) vorzugeben.
