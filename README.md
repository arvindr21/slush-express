# slush-express [![Build Status](https://secure.travis-ci.org/arvindr21/slush-express.png?branch=master)](https://travis-ci.org/arvindr21/slush-express) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-express.png)](http://badges.enytc.com/for/npm/slush-express) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/arvindr21/slush-express/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[![NPM](https://nodei.co/npm/slush-express.png?downloads=true&stars=true)](https://nodei.co/npm/slush-express/)

> A slush generator to scaffold Express apps

## Getting Started

You can scaffold an Express application with a combination of any View Engine and any Style Sheet Engine listed below

View Engines
* Jade
* Ejs
* Hogan
* HTML

Style Sheet Engines
* CSS
* LESS
* Stylus
* SCSS

### Installation

Install `slush-express` globally:

```bash
$ npm install -g slush-express
```

Remember to install `slush` globally as well, if you haven't already:

```bash
$ npm install -g slush
```

### Usage

Create a new folder for your project:

```bash
$ mkdir my-slush-express
```

Run the generator from within the new folder:

```bash
$ cd my-slush-express && slush express
```

And then pick a View Engine and Style Sheet Engine.

### Run 
To run the scaffolded app, execute

```bash
$ gulp
```

## MongoDB support

If you are looking for an integration with MongoDB, check out [slush-mongo](https://www.npmjs.org/package/slush-mongo) 

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/klei/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/arvindr21/slush-express/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/arvindr21/slush-express/issues).

## License 

The MIT License

Copyright (c) 2014, Arvind Ravulavaru

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.