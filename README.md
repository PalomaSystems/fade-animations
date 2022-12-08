![npm](https://img.shields.io/npm/v/fade-animations)
[![Release new version to NPMJS](https://github.com/kylescudder/fade-animations/actions/workflows/publish.yml/badge.svg)](https://github.com/kylescudder/fade-animations/actions/workflows/publish.yml)

# fade-animations
A small library for easy fade in fade in and fade out effects.

## Install
### NPM
`npm i fade-animations`
### CDN

```
<link rel="stylesheet" href="https://unpkg.com/fade-animations/dist/index.min.css">
<script src="https://unpkg.com/fade-animations/dist/index.min.js"></script>
```

## Usage
### fadeIn
```
import { fadeIn } from 'fade-animations'

const element = document.getElementById('elementId')
fadeIn(element)
```
### fadeOut
```
import { fadeOut } from 'fade-animations'

const element = document.getElementById('elementId')
fadeOut(element)
```
