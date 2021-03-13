import { requestHandler } from './requestHandler';

const http = require('http');
const url = require('url');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req : any, res: any) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Validate param
    const query = url.parse(req.url, true).query;

    if (query.names) {
        const names = query.names.split(',');
        await requestHandler(names);
        res.end('requestHandler(names)');
        return;
    }

    // response
    res.statusCode = 400;
    res.end('Invalid PPokeon Names');
});

// listen to incoming requests
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
