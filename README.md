# Creative SDK and MEAN stack

This is a MEAN stack port of [Adobe's Creative SDK Web example](https://creativesdk.adobe.com/docs/web/#/articles/gettingstarted/index.html).

## What's it built with?
This example port is built using [Meaniscule](https://github.com/ashryanbeats/meaniscule), a MEAN stack app generate that I built and maintain.

## What's different?
The initial commit is mostly a direct port of the example to MEAN stack. The only difference are:
- there is a [working image](http://i1.wp.com/ashryanbeats.com/wp-content/uploads/2015/04/image.jpg?fit=1024%2C1024) which is served from my website
- a Bootstrap class has been added to the `Edit!` button

## How does the port to MEAN stack work?
### `index.html`
The only Creative SDK-related addition to `index.html` is the inclusion of the Aviary Editor script:
```
<script type="text/javascript" src="http://feather.aviary.com/imaging/v2/editor.js"></script>
```

### `home.html`
The `Edit!` button and image have been moved to `home.html`, which is the template for the Angular home state of the app.

The `Edit!` button uses `ng-click` to call the `launchEditor` method from the home state's controller. 

Also referenced from the home state's controller is `imgUrl`.

### `home.controller.js`
This file is the Angular home state's controller and contains the `launchEditor` method and `imgUrl` string which are referenced in `home.html`.

The `featherEditor` variable is copied verbatim from Creative SDK's example; the API key is a public dummy key provided by Adobe for the purpose of demonstration, so I have included it here for your convenience.
