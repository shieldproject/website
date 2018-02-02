#!/bin/bash
git clone git@github.com:starkandwayne/shield.git
cd shield
#mkdir -p ../../../content/documentation
cp -r docs ../../../content/documentation
cd ..
pwd
rm -rf shield
