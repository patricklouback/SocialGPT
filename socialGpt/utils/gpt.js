const CHAT_GPD_API_KEY = process.env.CHAT_GPD_API_KEY;

export function ChatGpt(prompt){

        return fetch("https://api.openai.com/v1/engines/text-davinci-003-playground/completions", {
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
        .then((data) => {
            return data.choices[0].text;
        })
        .catch(() => {
            throw new Error('Não foi possível buscar as tags.');
        });
    }







// const CHAT_GPD_API_KEY = process.env.CHAT_GPD_API_KEY;

// export function ChatGpt(prompt){

//         fetch("https://api.openai.com/v1/engines/text-davinci-003-playground/completions", {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer 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`
//             },
//             body: JSON.stringify({
//                 prompt,
//                 temperature: 0.22,
//                 max_tokens: 1000,
//                 top_p: 1,
//                 frequency_penalty: 0,
//                 presence_penalty: 0,
//             }),
//         })
//         .then(response => response.json())
//         .then((data) => {
//             setResposta(data.choices[0].text),
//             console.log(data.choices[0].text)
//         })
//         .catch(() => Alert.alert('Erro', 'Não foi possível buscar as tags.'))
//         .finally(() => setLoading(false));
//     }
// }