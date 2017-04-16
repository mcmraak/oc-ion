![ion.js](https://mcmraak.github.io/images/ionjs.png)

# ion.js - Simple ajax-wrapper for OctoberCMS(Laravel5)
Version: 1.0.1

## Requirements

jQuery v2.*
Twitter Bootstrap v2.* (Optionally, to control bootstrap modal windows)

## Very simple!

ion.js - This is an easy-to-use shell for working with AJAX-requests in OctoberCMS projects.

# Connect
![ion.js](https://mcmraak.github.io/images/oc-ion-connect.png)


## API
**DATA** - Jquery selector: DOM-elements for data collection.
```
data=.formlogin
```
**AJAX** - URL to send an Ajax request
```
ajax=/api/v3/myroute;
```
**HTML** - Jquery selector: Container for returned data
```
html=#ContainerForAnswer;
```
**APPEND** - Add data to the end of the container.
```
APPEND=#ContainerForAnswer;
```

**PREPEND** - Add data to the beginning of the container.
```
PREPEND=#ContainerForAnswer;
```

**VAL** - Its variables that will be transferred (will override DATA if the keys match).
```
val='foo':123,'bar':'ParamPamPam!';
```
**GET** - Enabling a GET Parameter String in a Query
```
get=true;
```
**RUN** - Running the declared function (eval)
```
run=myfunc();
```
**MODAL** - Open twitter bootstrap modal window (#MyModal Integrates with the component)
```
modal=#MyModal;
```
```
modal=hide;
```
> All modal windows (with the .modal class) will be hidden

**CLEAN** - Clears field values or text within the ellemen by the selector
```
clean=.myfilds;
```
**DEBUG** - Sends all the returned data to the console (console.log)
```
debug=true;
```
**TYPE** - Determine the REST type of the request
```
type=put;
type=delete;
```
**RELOAD** - Reload this Page after a certain time
```
reload=2;
```
> Reloads the page after 2 seconds

## License

oc-ion.js is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
