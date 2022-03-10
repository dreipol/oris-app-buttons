# OS detection script

The script in question can be found at `./public/os-detection.js`.

To see an example implementation, simply expose the public directory over a local server. 
With Node.js installed you could for example do:

```
npx serve ./public
```

The script does very basic user agent detection, which should work in approximately 80% of all cases. 
The Store URL's are obviously missing. We also intend to extend the assets with badges for all required languages.