# Brunch SASS

This is a modern sass skeleton for [Brunch](http://brunch.io).

## Installation

Clone this repo manually

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `brunch watch -s` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * Default href localhost:3333
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)


# Shopify theme with SLATE

This is a trial run for collaborating on a new theme build with Slate for Shopify.

## Preparation

* You will need npm    
* [Slate](https://www.npmjs.com/package/@shopify/slate): `npm install -g @shopify/slate`
* Check Slate is now running `slate --version`


## Set up project

* Clone this repo
* Create your config.yml file `cp config-sample.yml config.yml`
* Using your preferred editor update your store name, password and theme id in your config.yml file
  (Please note you will only need to update the theme id if you are NOT only editing your live theme.)


## Start project

* Build project `npm i`
* Run slate with watchers for automatic browser updating `slate start`

This should open a new localhost window in your browser. This is a preview window, to see the changes to your live theme just refresh your browser.


**Development process notes to be added here when ready

