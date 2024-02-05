const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export async function sendMSGToOpenAI(msg) {
  try { 
    const response = await openai.chat.completions.create({
    // const response = await openai.create('chat/completions', {
      model:'gpt-3.5-turbo',
        messages:[{"role":"user","content":msg}],
        max_tokens:1000,
        temperature:0.7,
    });
    // console.log(response.choices[0].message.content)
    return response.choices[0].message.content;

  } catch (error) {
    console.error("Error in sendMSGToOpenAI:", error);
    throw error;
  }
}

// const response = await openai.createCompletion({
 // model: 'davinci-002',
      // prompt: msg,
      // temperature: 0.7,
      // max_tokens: 256,
      // top_p: 1,
      // frequency_penalty: 0,
      // presence_penalty: 0


// const {Configuration, OpenAIApi} = require('openai');
// const configuration = new Configuration({apiKey:"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"});
// const openai = new OpenAIApi(configuration)

// export async function sendMSGToOpenAI(message){
//     const res = await openai.createCompletion({
//         model:'text-davinci-003',
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presense_penalty: 0
//     });
//     return res.data.choices[0].text;
// }


// import { Configuration, OpenAI } from 'openai';
// import { OpenAI } from 'openai';
// const openai = new OpenAI({ apiKey: "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",
// dangerouslyAllowBrowser: true });