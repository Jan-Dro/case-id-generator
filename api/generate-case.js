export default function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Generate UUID
    const caseId = crypto.randomUUID();
    const timestamp = Date.now();
    
    // Build redirect URL
    const baseUrl = `https://${req.headers.host}`;
    const redirectUrl = `${baseUrl}/api/case-created?id=${caseId}&timestamp=${timestamp}&status=success`;
    
    console.log('Generated case ID:', caseId);
    console.log('Redirecting to:', redirectUrl);
    
    // Perform redirect
    res.redirect(302, redirectUrl);
}