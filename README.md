# Raygun Testing
This Repo contains demonstration of Raygun module loading issue.

It is used create-react-app + raygun4js (v2.8.5)

### Getting Started ###
```
$ yarn install && yarn start
```
On load, it is expected to fail due to type error exist in line:9 of `App.js` component. During execution, Raygun will not fire API request and it can be observed via Chrome network inspector.

To prove that Raygun actually works on non-runtime error, comment out line:9 from `App.js` and reload the page. There will be a button rendered in the view and clicking it will execute JS error code. (And Raygun will make POST request)


### Background ###
After some investigation on Raygun, we have found that if there is a JS error code exist in runtime code, Raygun fail to make POST request and application breaks. Our team was curious why Raygun does not pick up the error and found that if there is JS execution error code before Raygun initialisation is completed, it won't catch the error.

So far, Raygun loading sequence is on it's own and we are not able to append Raygun initialisation into a promise chain.

