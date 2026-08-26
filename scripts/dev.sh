#!/bin/sh
# dev helper: install deps and run the test suite
# not proud of this part
set -e
npm install
npm test
