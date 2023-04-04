const CHAT_GPD_API_KEY = process.env.CHAT_GPD_API_KEY;

function retryOnFailure(fn, retries) {
    return fn().catch(error => {
      if (retries > 0) {
        return retryOnFailure(fn, retries - 1);
      } else {
        throw error;
      }
    });
  }
  
  export function ChatGpt(prompt) {
    const fn = () => fetch("https://api.openai.com/v1/engines/text-davinci-003-playground/completions", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${CHAT_GPD_API_KEY}`
        },
        body: JSON.stringify({
            prompt,
            temperature: 0.22,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.choices && data.choices[0] && data.choices[0].text) {
          return data.choices[0].text;
        } else {
          throw new Error('Resposta inválida da API');
        }
      });
  
    return retryOnFailure(fn, 3);
  }
  