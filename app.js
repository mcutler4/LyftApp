const http = require('http');
var url = require('url');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url == '/test') { // Desired POST URL

        res.writeHead(200, { 'Content-Type': 'application/json' }); // Accepts JSON

        let data = '';
        req.on('data', chunk => {
            data += chunk; // Grab all the data
        });

        req.on('end', () => {
            if (data) { // Once we have the data, lets process it
                var stringToCut = JSON.parse(data).string_to_cut;
                stringToCut.trim(); // remove extra whitespace
                var returnString = "";
                // Starting at index 2, grab the 3rd character, and every 3rd character after that
                // until we hit the end of our input string
                for (let i = 2; i < stringToCut.length; i += 3) {
                    returnString += stringToCut[i];
                }
                // Write the return string back to the caller
                res.write(JSON.stringify({ return_string: returnString }));
                res.end()
            } else {
                // Notify the caller of invalid input
                res.write('Invalid input');
                res.end();
            }
        });

        req.on('error', (err) => {
            // Log any errors
            console.error(err);
        });

    } else {
        // No other supported endpoints at this time
        res.end('Invalid request');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
