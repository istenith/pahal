Pahal
---
The website is to help students seeking admission in NIT Hamirpur, to find there way through procedures and requirements.

The proposed features of website in order of high to low priorities are:
+ To do list : cookie based
+ Document order list(Nested in todo list)
+ All important forms and links
+ An embeded map to show locations
+ FAQ section

The features listed below are good to have and should not be our primary concern:
+ A splash screen cookie based (onetime only) to promote ISTE.
+ ISTE's main site (abouts and history)

# Tech Stalks
To ease the development and maintainence following technologies will be used:
## NODE.JS
To provide modules helpfull in developement. As the site will be static as of now no node features other than npm will be required.
## pug
Python based indentation way to easily consvert to htmal with same tags

## less
Object oriented way of writing CSS, gets converted to CSS

SETUP
---
Install all node packages
```
$ ./npm_global_installs.sh
```

This would install global packages namely `pug, less, live-server`

BUILD
---
On `master` branch of the project run
```
$ ./build.sh
```
This will create a directory `builds` in project folder.

**Note:** This is listener script and once your run it go ahead making changes.

To kill press `ctrl + C`


Test for features and bugs then push the changes.

CONTRIBUTION
---
Due to bug inducing workflow experienced in the past. The workflow adopted seems to be conservative but is necessary.
There are two branches of the project `master` and `gh-pages`. `master` is the main development branch where all the latest code exists. `gh-pages` branch is marked to be hosted by github and only thoroughly tested builds should be commited here.
