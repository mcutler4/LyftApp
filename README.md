# LyftApp
Basic Web App with one exposed API which will return every third letter of the provided input string.

- Accepts a POST request to the route “/test”, which accepts one argument “string_to_cut”
- Returns a JSON object with the key “return_string” and a string containing every third letter from the original string

(e.g.) If you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}.
