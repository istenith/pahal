trap "kill 0" EXIT

mkdir -p builds
mkdir -p builds/styles
mkdir -p builds/scripts
mkdir -p builds/resources

cp scripts/* builds/scripts/ --update
cp -r resources/* builds/resources/ --update

pug -w pug/pages --basedir ./ --out builds/ &
less-watch-compiler &
live-server ./builds &

wait
