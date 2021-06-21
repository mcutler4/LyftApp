# LyftApp
Basic Web App with one exposed API which will return every third letter of the provided input string.

- Accepts a POST request to the route “/test”, which accepts one argument “string_to_cut”
- Returns a JSON object with the key “return_string” and a string containing every third letter from the original string

(e.g.) If you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}.

## Running the Service
This app is built using npm. 

In the app directory, run npm init to download dependencies, initialize the app, and create a package.json file.
To run the app use the command: node app.js.
To hit the /test API, I use and recommend the Talend API Tester Chrome Plugin, you can see a screenshot of this in the repo at LyftAppScreenshot.png.
