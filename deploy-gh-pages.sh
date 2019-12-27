#! /usr/bin/env bash

yarn build && git subtree push --prefix dist origin gh-pages
