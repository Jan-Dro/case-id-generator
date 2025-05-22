export const config = {
  runtime: 'nodejs18.x',
}

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.status(200).json({
        status: 'Server is running!',
        timestamp: new Date().toISOString(),
        endpoints: {
            generate: `https://${req.headers.host}/api/generate-case`,
            health: `https://${req.headers.host}/api/health`
        }
    });
}
