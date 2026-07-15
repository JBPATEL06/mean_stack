for read body data of request than we need to use 
app.use(express.json());

using get if we want read requested data than we need to use query parameter 


resposne object properties 

res.send()      // Send response
res.json()      // Send JSON
res.status()    // Set status code
res.sendStatus()// Set status + message
res.redirect()  // Redirect
res.render()    // Render template
res.set()       // Set header
res.cookie()    // Set cookie
res.clearCookie() // Remove cookie
res.end()       // End response

if forget to write res.end after res.write than it will goes in ifinite looop 

request obnjet properties and method 

req.body        // Request body data
req.params      // URL parameters
req.query       // Query string values
req.headers     // All headers
req.header()    // Get specific header
req.method      // GET, POST, etc.
req.url         // Request URL
req.path        // Path only
req.ip          // Client IP
req.cookies     // Cookies (with middleware)

