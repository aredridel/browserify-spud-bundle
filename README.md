browserify-spud-bundle
======================

Use:

```
browserify -t browserify-spud-bundle yourapp.js
```

In your application:

```
console.log(require('./locale/US/en/test.properties').greeting);
```

Or pass the loaded content to other tools like dust helpers.
