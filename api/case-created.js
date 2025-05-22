export const config = {
  runtime: 'nodejs18.x',
}

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    const { id, timestamp, status } = req.query;
    
    console.log('Case created page accessed:', id);
    
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Case Created Successfully</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }
                .container { background: white; padding: 20px; border-radius: 8px; max-width: 500px; margin: 0 auto; }
                .success { color: #28a745; }
                .case-id { font-family: monospace; background: #f8f9fa; padding: 10px; border-radius: 4px; word-break: break-all; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1 class="success">✅ Case Created Successfully!</h1>
                <p><strong>Case ID:</strong></p>
                <div class="case-id">${id}</div>
                <p><strong>Timestamp:</strong> ${new Date(parseInt(timestamp)).toLocaleString()}</p>
                <p><strong>Status:</strong> ${status}</p>
                <script>
                    console.log('Case page loaded');
                    console.log('Case ID:', '${id}');
                    console.log('Current URL:', window.location.href);
                </script>
            </div>
        </body>
        </html>
    `);
}
