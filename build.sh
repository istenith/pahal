mkdir -p builds
mkdir -p builds/pages
mkdir -p builds/styles
mkdir -p builds/scripts
mkdir -p builds/resources

cp scripts/* builds/scripts/ --update
cp -r resources/* builds/resources/ --update

pug -w ./index.pug --basedir ./ --out builds/ &
pug -w pug/pages --basedir ./ --out builds/pages &
less-watch-compiler &
live-server ./builds &
