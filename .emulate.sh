#!/bin/bash
# Manually emulate ionic/cordova application
# Miroslav Masat 2014
# don't forget to run chmod 777 emulate.sh
# use this script if cordova emulate ios or ionic emulate ios doesn't work
# for more, https://gist.github.com/Tyrhus/993b754bdeb6fd6d67cd
# if got errors, npm update -g ios-sim first

echo "Emulating..."
cd ./platforms/ios/build/emulator
var=$(pwd)

ios-sim launch "$var"/*.app
