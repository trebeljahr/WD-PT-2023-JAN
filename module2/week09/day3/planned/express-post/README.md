# express-post - lesson plan

## Start
- start with simple, express app scaffold
- add "/" route and make it send index.html

## POST form - Client HTML side
- add index.html with simple form element
- specify form encoding
- relate name - to the encoding used

## POST form - Server Express side
- introduce the idea of a middleware
- handle request with middleware -> urlencode + json

## Background Info
- show network tab
- show CURL request

### XSS
- do xss on simple post handling form
- add sanitizer to prevent that

## Add complexity
- add multipart form for image upload
- handle image upload
- return uploaded image in simple HTML response

## Make grayscale service!
- make a grayscale "service"
- use "sharp" to manipulate image

## Homework / Exercise: 
- try using sharp to make a negative image service similar to the grayscale example
- useful: https://sharp.pixelplumbing.com/api-operation#negate -> await sharp(imgLoc).negate()
- can you use handlebars as a layout?