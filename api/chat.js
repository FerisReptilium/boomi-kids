// Vercel Serverless Function: api/chat.js
// Esta função roda no servidor do Vercel, mantendo a API KEY segura.

export default async function handler(req, res) {
  // CORS: Permitir apenas o próprio site (em produção o Vercel cuida disso, mas é bom ter)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { messages, systemPrompt } = req.body;

  // A chave é pega das Variáveis de Ambiente do Vercel (Configuradas no Dashboard)
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ 
      error: 'API Key não configurada no servidor Vercel.' 
    });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.6,
        max_tokens: 300,
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json({ 
      content: data.choices[0].message.content 
    });

  } catch (error) {
    console.error('Serverless Error:', error);
    return res.status(500).json({ error: 'Erro interno no servidor de chat' });
  }
}
