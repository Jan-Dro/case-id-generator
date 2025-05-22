export const config = {
  runtime: 'nodejs18.x',
}

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    const caseId = crypto.randomUUID();
    const timestamp = Date.now();
    const baseUrl = `https://${req.headers.host}`;
    const redirectUrl = `${baseUrl}/api/case-created?id=${caseId}&timestamp=${timestamp}&status=success`;
    
    console.log('Generated case ID:', caseId);
    res.redirect(302, redirectUrl);
}
