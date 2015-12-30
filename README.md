# jquery-cmdrjs (jquery.cmdr.js)

A jQuery plugin for [cmdrjs](https://github.com/cmdrjs/cmdrjs).

[![Build status](https://travis-ci.org/cmdrjs/jquery-cmdrjs.png)](https://travis-ci.org/cmdrjs/jquery-cmdrjs)
[![Bower version](https://badge.fury.io/bo/jquery-cmdrjs.svg)](http://badge.fury.io/bo/jquery-cmdrjs)

## Installing the plugin

#### Bower
```
bower install jquery-cmdrjs
```

#### Manual

Download files from the [releases](https://github.com/cmdrjs/jquery-cmdrjs/releases) page.

## Basic usage

```html
<script src="jquery.js"></script>
<script src="cmdr.js"></script>
<script src="jquery.cmdr.js"></script>
<script>    
    $('#container').cmdr({
        //options here
    });
</script>
```

This plugin creates a new cmdrjs [Shell](https://github.com/cmdrjs/cmdrjs/wiki/shell-class) object for each of the selected elements.
