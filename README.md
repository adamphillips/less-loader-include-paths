This is a simple example to illustrate the conflict between the less include paths and the WebpackFileManager used in the less-loader webpack plugin.

There are two locations in the "app" where stylesheets are kept:

- app/assets/stylesheets
- vendor/assets/stylesheets

This is similar to a [typical Ruby on Rails application](http://guides.rubyonrails.org/asset_pipeline.html#asset-organization).

Our "main" stylesheet is at `app/assets/stylesheets/main.less`. This imports a stylesheet from a sub folder `folder-1` which in turn imports a second stylesheet from a sub folder `folder-2`. Both paths are specified relative to the `app/assets/stylesheets` folder.

A third file - `vendor-styles.less` is imported from `vendor/assets/stylesheets`. The path for this file is specified relative to `vendor/assets/stylesheets`.

It is possible to compile `app/assets/stylesheets/main.less` by specifying both of the stylesheets folders in the `paths` option passed to `less.render`. An example script has been added to demonstrate this at `./compile-without-webpack.js` and can be run using `npm run without-webpack` (the compiled css is just output to screen, not written to a file but this is sufficient to verify it compiles correctly).

Attempting to do the same thing using the less-loader does not work, even if the paths option is set.


