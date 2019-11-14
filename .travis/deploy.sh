#!/bin/sh

install() {
  pip install mkdocs mkdocs-material pymdown-extensions pygments
}

build() {
  mkdocs build --verbose --clean --strict
}

deploy() {
  firebase deploy --token $FIREBASE_TOKEN
}

install
build && deploy
