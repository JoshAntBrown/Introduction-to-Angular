IntroductionToAngular
=====================

Read the tasks pdf for a list of things to do, the slides pdf contains the slides from the talk.

You will need Node.JS to run the server, which you can then run by going to the /app directory in your terminal and running 'node server' then navigating to http://localhost:3000/ in your browser. 

If you don't have node you can still run the app but won't be able to complete the factory api step, in which case you'll want to load the index.html inside /app/public directory.


##Tasks

###Data­binding and Directives
* “ng­app” to html
* “ng­model” to search box with projectSearch value
* {{ projectSearch }} to the display area
* “ng­show” to projectSearch container
* ng­init=”data=[‘Task1’,’Task2’]” to body
* ng­repeat to table row

###Filters
* “ | filter:projectSearch ” to table row repeat

###Modules and Controllers
* Remove ng­init
* Add new script tag
* Create new angular module
* Create new angular controller
* Setup new module and ng­controller
* Fix ng­repeat to include the properties
* “ | orderBy:'name' “ to table row repeat
* Use currency filter on the budget of projects “ | currency:'£' “

###Factories
* Add api factory
* Apply factory to controller
