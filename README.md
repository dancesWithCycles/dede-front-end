# Dede-map

realtime map (RTM) service for the Designated Driver (Dede) free software community
[project](https://dedriver.org)

## Table of Contents
0. [General](#General)
1. [Quick Start Guide](#Quick-Start-Guide)
2. [Setup](doc/setup.md)

# General

This repository provides a service for
[GNU/Linux](https://www.gnu.org/gnu/linux-and-gnu.en.html)
operating system.
As a front end service,
it interacts with the
[Dede server](https://github.com/Dede-Designated-Driver/dede-server).

# Quick Start Guide

## Preparation

* check out project on a GNU/Linux development system and change into the project root folder
```
git clone git@github.com:Dede-Designated-Driver/dede-front-end.git
```

* run the following instruction to install dependenies
```
npm i
```

## Development setup

* run the following instruction to start the service in development mode
```
npm run start

```

## Production deployment

* run the following instruction to build the service for a production host
```
npm run build
```
