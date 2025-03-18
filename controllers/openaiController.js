// // const dotenv = require("dotenv");
// // dotenv.config();


// // // const { Configuration, OpenAIApi } = require("configuration","openai");
// // // const configuration = new Configuration({
// // //   apiKey: process.env.OPENAI_API_KEY,
// // // });
// // // const openai = new OpenAIApi(configuration);

// // // const OpenAI = require('openai');
// // // const openai = new OpenAI({
// // //   apiKey: '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'
// // // });

// // const { OpenAI } = require('openai');
// // const openai = new OpenAI({
// //   apiKey: process.env.OPENAI_API_KEY, // Use environment variable for API key
// // });



// // exports.summaryController = async (req, res) => {
// //   try {
// //     const { text } = req.body;
// //     const { data } = await openai.createCompletion({
// //       model: "text-davinci-003",
// //       prompt: `Summarize this \n${text}`,
// //       max_tokens: 500,
// //       temperature: 0.5,
// //     });
// //     if (data) {
// //       if (data.choices[0].text) {
// //         return res.status(200).json(data.choices[0].text);
// //       }
// //     }
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(404).json({
// //       message: err.message,
// //     });
// //   }
// // };

// // exports.paragraphController = async (req, res) => {
// //   try {
// //     const { text } = req.body;
// //     const { data } = await openai.createCompletion({
// //       model: "text-davinci-003",
// //       prompt: `write a detail paragraph about \n${text}`,
// //       max_tokens: 500,
// //       temperature: 0.5,
// //     });
// //     if (data) {
// //       if (data.choices[0].text) {
// //         return res.status(200).json(data.choices[0].text);
// //       }
// //     }
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(404).json({
// //       message: err.message,
// //     });
// //   }
// //    };

// // exports.chatbotController = async (req, res) => {
// //   try {
// //     const { text } = req.body;
// //     const { data } = await openai.createCompletion({
// //       model: "text-davinci-003",
// //       prompt: `Answer question similar to how yoda from star war would.
// //       Me: 'what is your name?'
// //       yoda: 'yoda is my name'
// //       Me: ${text}`,
// //       max_tokens: 300,
// //       temperature: 0.7,
// //     });
// //     if (data) {
// //       if (data.choices[0].text) {
// //         return res.status(200).json(data.choices[0].text);
// //       }
// //     }
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(404).json({
// //       message: err.message,
// //     });
// //   }
// // };


// // exports.jsconverterController = async (req, res) => {
// //   try {
// //     const { text } = req.body;
// //     const { data } = await openai.createCompletion({
// //       model: "text-davinci-002",
// //       prompt: `/* convert these instruction into javascript code \n${text}`,
// //       max_tokens: 400,
// //       temperature: 0.25,
// //     });
// //     if (data) {
// //       if (data.choices[0].text) {
// //         return res.status(200).json(data.choices[0].text);
// //       }
// //     }
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(404).json({
// //       message: err.message,
// //     });
// //   }
// // };


// // // exports.scifiImageController = async (req, res) => {
// // //   try {
// // //     const { text } = req.body;
// // //     const { data } = await openai.createImage({
// // //       prompt: `generate a scifi image of ${text}`,
// // //       n: 1,
// // //       size: "512x512",
// // //     });
// // //     if (data) {
// // //       if (data.data[0].url) {
// // //         return res.status(200).json(data.data[0].url);
// // //       }
// // //     }
// // //   } catch (err) {
// // //     console.log(err);
// // //     return res.status(404).json({
// // //       message: err.message,
// // //     });
// // //   }
// // //};

// // exports.scifiImageController = async (req, res) => {
// //   try {
// //     const { text } = req.body;
// //     // Use the correct method to generate images
// //     const response = await openai.images.create({
// //       prompt: `Generate a sci-fi image of ${text}`,
// //       n: 1,
// //       size: "512x512",
// //     });

// //     // Handle the response
// //     if (response && response.data && response.data.length > 0) {
// //       return res.status(200).json({ url: response.data[0].url });
// //     } else {
// //       return res.status(404).json({ message: 'No image found' });
// //     }
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(500).json({
// //       message: err.message,
// //     });
// //   }
// // };

// const dotenv = require('dotenv');
// dotenv.config();

// const { OpenAI } = require('openai');
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// exports.summaryController = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const response = await openai.completions.create({
//       model: 'text-davinci-003',
//       prompt: `Summarize this \n${text}`,
//       max_tokens: 500,
//       temperature: 0.5,
//     });
//     if (response && response.choices && response.choices[0].text) {
//       return res.status(200).json(response.choices[0].text);
//     }
//     return res.status(404).json({ message: 'No text found' });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err.message });
//   }
// };

// exports.paragraphController = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const response = await openai.completions.create({
//       model: 'text-davinci-003',
//       prompt: `Write a detailed paragraph about \n${text}`,
//       max_tokens: 500,
//       temperature: 0.5,
//     });
//     if (response && response.choices && response.choices[0].text) {
//       return res.status(200).json(response.choices[0].text);
//     }
//     return res.status(404).json({ message: 'No text found' });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err.message });
//   }
// };

// exports.chatbotController = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const response = await openai.completions.create({
//       model: 'text-davinci-003',
//       prompt: `Answer question similar to how Yoda from Star Wars would.
//       Me: 'What is your name?'
//       Yoda: 'Yoda is my name'
//       Me: ${text}`,
//       max_tokens: 300,
//       temperature: 0.7,
//     });
//     if (response && response.choices && response.choices[0].text) {
//       return res.status(200).json(response.choices[0].text);
//     }
//     return res.status(404).json({ message: 'No text found' });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err.message });
//   }
// };

// exports.jsconverterController = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const response = await openai.completions.create({
//       model: 'text-davinci-002',
//       prompt: `/* Convert these instructions into JavaScript code \n${text}`,
//       max_tokens: 400,
//       temperature: 0.25,
//     });
//     if (response && response.choices && response.choices[0].text) {
//       return res.status(200).json(response.choices[0].text);
//     }
//     return res.status(404).json({ message: 'No text found' });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err.message });
//   }
// };

// exports.scifiImageController = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const response = await openai.images.create({
//       prompt: `Generate a sci-fi image of ${text}`,
//       n: 1,
//       size: '512x512',
//     });
//     if (response && response.data && response.data.length > 0 && response.data[0].url) {
//       return res.status(200).json({ url: response.data[0].url });
//     }
//     return res.status(404).json({ message: 'No image found' });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err.message });
//   }
// };

// const dotenv = require('dotenv');
// dotenv.config();

// //import OpenAI from "openai";
// const OpenAI = require("openai");

// //const openai = new OpenAI();
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// exports.summaryController = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const response = await openai.completions.create({
//       model: 'gpt-4-turbo', // Update to a non-deprecated model
//       prompt: `Summarize this \n${text}`,
//       max_tokens: 500,
//       temperature: 0.5,
//     });
//     if (response && response.choices && response.choices[0].text) {
//       return res.status(200).json(response.choices[0].text);
//     }
//     return res.status(404).json({ message: 'No text found' });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err.message });
//   }
// };

// exports.paragraphController = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const response = await openai.completions.create({
//       model: 'gpt-4-turbo', // Update to a non-deprecated model
//       prompt: `Write a detailed paragraph about \n${text}`,
//       max_tokens: 500,
//       temperature: 0.5,
//     });
//     if (response && response.choices && response.choices[0].text) {
//       return res.status(200).json(response.choices[0].text);
//     }
//     return res.status(404).json({ message: 'No text found' });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err.message });
//   }
// };

// exports.chatbotController = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const response = await openai.completions.create({
//       model: 'gpt-4-turbo', // Update to a non-deprecated model
//       prompt: `Answer question similar to how Yoda from Star Wars would.
//       Me: 'What is your name?'
//       Yoda: 'Yoda is my name'
//       Me: ${text}`,
//       max_tokens: 300,
//       temperature: 0.7,
//     });
//     if (response && response.choices && response.choices[0].text) {
//       return res.status(200).json(response.choices[0].text);
//     }
//     return res.status(404).json({ message: 'No text found' });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err.message });
//   }
// };

// exports.jsconverterController = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const response = await openai.completions.create({
//       model: 'gpt-4', // Update to a non-deprecated model
//       prompt: `/* Convert these instructions into JavaScript code \n${text}`,
//       max_tokens: 400,
//       temperature: 0.25,
//     });
//     if (response && response.choices && response.choices[0].text) {
//       return res.status(200).json(response.choices[0].text);
//     }
//     return res.status(404).json({ message: 'No text found' });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err.message });
//   }
// };

// // exports.scifiImageController = async (req, res) => {
// //   try {
// //     const { text } = req.body;
// //     const response = await openai.images.create({
// //       prompt: `Generate a sci-fi image of ${text}`,
// //       n: 1,
// //       size: '512x512',
// //     });
// //     if (response && response.data && response.data.length > 0 && response.data[0].url) {
// //       return res.status(200).json({ url: response.data[0].url });
// //     }
// //     return res.status(404).json({ message: 'No image found' });
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(500).json({ message: err.message });
// //   }
// // };

// exports.scifiImageController = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const response = await openai.images.generate({
//       prompt: `Generate a sci-fi image of ${text}`,
//       n: 1,
//       size: '512x512',
//     });

//     if (response && response.data && response.data.length > 0 && response.data[0].url) {
//       return res.status(200).json({ url: response.data[0].url });
//     }
//     return res.status(404).json({ message: 'No image found' });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err.message });
//   }
// };
///////////////////////////////////////////////////////////////////////////////////////////


const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI('AIzaSyB5b_2QtisW6oM7QdV6fA4SEGAogJ-JiJI'); // Ensure your API key is correct


const summaryController = async (req, res) => {
  try {
    const { text } = req.body;

    // Ensure that text is provided
    if (!text) {
      return res.status(400).json({ message: 'Text is required' });
    }

    // Initialize the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate the summary using the Gemini model
    const result = await model.generateContent(`Summarize this:\n${text}`);

    // Assuming result.response.text() is the correct way to access the generated text
    const responseText = result.response.text(); // Adjust based on your actual response structure

    // Check if the responseText is valid
    if (responseText && responseText.trim()) {
      return res.status(200).json({ response: responseText });
    }

    // If no summary was generated
    return res.status(404).json({ message: 'No summary generated' });

  } catch (err) {
    console.error('Error in summaryController:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


const getGenerativeModel = async () => {
  try {
    return await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  } catch (error) {
    console.error('Error getting generative model:', error);
    throw new Error('Failed to get generative model');
  }
};

// Controller to handle paragraph requests
const paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ message: 'Valid text is required' });
    }

    const model = await getGenerativeModel();
    const result = await model.generateContent(`Write a detailed paragraph about:\n${text}`);

    // Debugging: Log the result to understand the response structure
    console.log('Model result:', result);

    const responseText = result && result.response && result.response.text ? result.response.text() : '';

    if (responseText) {
      return res.status(200).json({ paragraph: responseText });
    }

    return res.status(404).json({ message: 'Paragraph not found' });
  } catch (err) {
    console.error('Error in paragraphController:', err);
    return res.status(500).json({ message: 'Internal Server Error', details: err.message });
  }
};

//create a function addtion of 2 numbers
const jsconverterController = async (req, res) => {
  try {
    const { text } = req.body; // Extract text from the request body

    // Validate input
    if (!text) {
      return res.status(400).json({ message: 'Text is required' });
    }

    console.log('Received text:', text); // Log the input text

    // Construct the prompt for the model
    const prompt = `/* Convert these instructions into JavaScript code: \n${text}`;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Get the generative model

    // Generate content using the model
    const result = await model.generateContent(prompt);
    console.log('Model result:', result); // Log the model's output

    // Check if the model's output is structured correctly
    const responseText = result.response?.text ? result.response.text() : '';
    console.log('Response text:', responseText); // Log the response text

    // Send response based on whether responseText is available
    if (responseText) {
      return res.status(200).json({ response: responseText });
    }

    return res.status(404).json({ message: 'No text found' });
  } catch (err) {
    console.error('Error during JavaScript conversion:', err); // Log error for debugging
    return res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

const chatbotController = async (req, res) => {
  try {
    const { text } = req.body;

    // Check if text is provided in the request
    if (!text) {
      return res.status(400).json({ message: 'Text is required' });
    }

    // Initialize the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate the content using the model
    const result = await model.generateContent(`Answer the question as a chatbot from Star Wars would.\nMe: 'What is your name?'\nchatbot: 'Chatbot is my name'\nMe: ${text}`);

    // Assuming result.response.text() returns the generated text
    const responseText = result.response.text(); // Ensure this method works as intended

    // Check if the responseText is not empty or undefined
    if (responseText && responseText.trim()) {
      return res.status(200).json({ response: responseText });
    }

    // If the responseText is empty
    return res.status(404).json({ message: 'No response generated' });

  } catch (err) {
    // Log the error and return a 500 response
    console.error('Error in chatbotController:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


// const { VertexAI } = require('@google-cloud/aiplatform');

// const scifiImageController = async (req, res) => {
//   try {
//     const { text } = req.body;

//     // Initialize Vertex AI client
//     const client = new VertexAI.ImageGenerationClient();

//     // Request for image generation
//     const [response] = await client.generateImage({
//       prompt: `Generate a sci-fi image of ${text}`,
//       model: genAI.getGenerativeModel({ model: "gemini-1.5-flash" }),
//       params: {
//         n: 1,
//         size: '512x512',
//       },
//     });

//     if (response && response.images && response.images.length > 0) {
//       return res.status(200).json({ url: response.images[0].url });
//     }
//     return res.status(404).json({ message: 'No image found' });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: err.message });
//   }
// };

// const { VertexAI } = require('@google-cloud/aiplatform');

// const scifiImageController = async (req, res) => {
//   try {
//     const { text } = req.body;

//     // Validate input
//     if (!text || typeof text !== 'string') {
//       return res.status(400).json({ message: "Invalid input: 'text' is required." });
//     }

//     // Initialize Vertex AI client
//     const client = new VertexAI.ImageGenerationClient();

//     // Request for image generation
//     const [response] = await client.generateImage({
//       prompt: `Generate a sci-fi image of ${text}`,
//       model: genAI.getGenerativeModel({ model: "gemini-1.5-flash" }), // Adjust to your model path
//       parameters: {
//         // Parameters may differ based on the specific API requirements
//         max_output_images: 1,
//         image_size: '512x512',
//       },
//     });

//     // Check for generated images
//     if (response && response.images && response.images.length > 0) {
//       return res.status(200).json({ url: response.images[0].uri }); // Assuming the URL is in 'uri'
//     }
//     return res.status(404).json({ message: 'No image found' });
//   } catch (err) {
//     console.error("Error generating image:", err);
//     return res.status(500).json({ message: "An error occurred while generating the image." });
//   }
// };

//module.exports = scifiImageController;

// const { ImageGenerationClient } = require('@google-cloud/aiplatform');

// const scifiImageController = async (req, res) => {
//   try {

//     const { text } = req.body;

//     // Initialize Vertex AI client
//     const client = new ImageGenerationClient();

//     // Request for image generation
//     const [response] = await client.generateImage({
//       prompt: `Generate a sci-fi image of ${text}`,
//       model: "D:/chat-gpt-clone/models/gemini-1.5-flash",
//       params: {
//         n: 1,
//         size: '512x512',
//       },
//     });

//     if (response && response.images && response.images.length > 0) {
//       return res.status(200).json({ url: response.images[0].url });
//     }
//     return res.status(404).json({ message: 'No image found' });
//   } catch (err) {
//     console.error('Error initializing ImageGenerationClient:', err);

//     console.error("Error generating image:", err);
//     return res.status(500).json({ message: err.message });
//   }
// };

// const { ImageGenerationServiceClient } = require('@google-cloud/aiplatform');

// const scifiImageController = async (req, res) => {
//   try {
//     const { text } = req.body;

//     // Initialize Vertex AI client
//     const client = new ImageGenerationServiceClient();

//     // Define the request parameters
//     const request = {
//       prompt: `Generate a sci-fi image of ${text}`,
//       model: "D:/chat-gpt-clone/models/gemini-1.5-flash",
//       params: {
//         n: 1,
//         size: '512x512',
//       },
//     };

//     // Request for image generation
//     const [response] = await client.generateImage(request);

//     if (response && response.images && response.images.length > 0) {
//       return res.status(200).json({ url: response.images[0].url });
//     }
//     return res.status(404).json({ message: 'No image found' });
//   } catch (err) {
//     console.error('Error generating image:', err);
//     return res.status(500).json({ message: err.message });
//   }
// };


const { ImageServiceClient } = require('@google-cloud/aiplatform');

const scifiImageController = async (req, res) => {
  try {
    const { text } = req.body;

    // Initialize Vertex AI client
    const client = new ImageGenerationServiceClient();  // Ensure this is the correct client

    // Define the request parameters
    const request = {
      prompt: `Generate a sci-fi image of ${text}`,
      model: "D:/chat-gpt-clone/models", // Update this
      params: {
        n: 1,
        size: '512x512',
      },
    };

    // Request for image generation
    const [response] = await client.generateImage(request);

    if (response && response.images && response.images.length > 0) {
      return res.status(200).json({ url: response.images[0].url });
    }
    return res.status(404).json({ message: 'No image found' });
  } catch (err) {
    console.error('Error generating image:', err);
    return res.status(500).json({ message: err.message });
  }
};

// exports.scifiImageController = async (req, res) => {
//     try {
//       const { text } = req.body;
//       const { data } = await openai.createImage({
//         prompt: `generate a scifi image of ${text}`,
//         n: 1,
//         size: "512x512",
//       });
//       if (data) {
//         if (data.data[0].url) {
//           return res.status(200).json(data.data[0].url);
//         }
//       }
//     } catch (err) {
//       console.log(err);
//       return res.status(404).json({
//         message: err.message,
//       });
//     }
//   };

// exports.scifiImageController = async (req, res) => {
//   try {
//     const { text } = req.body;

//     // Validate input
//     if (!text || typeof text !== 'string') {
//       return res.status(400).json({ message: "Invalid input: 'text' is required." });
//     }

//     const response = await gemini.createImage({
//       prompt: `generate a scifi image of ${text}`,
//       num_images: 1,
//       image_size: "512x512", // Adjust according to Gemini API requirements
//     });

//     // Assuming Gemini response structure has a similar format
//     if (response && response.images && response.images[0].url) {
//       return res.status(200).json({ url: response.images[0].url });
//     } else {
//       return res.status(500).json({ message: "Image generation failed." });
//     }
//   } catch (err) {
//     console.error("Error generating image:", err);
//     return res.status(500).json({ message: "An error occurred while generating the image." });
//   }
// };


// const scifiImageController = (req, res) => {
//   res.send('Sci-Fi Image endpoint'); // Implement as needed
// };
// const express = require('express');
// const router = express.Router();
// const axios = require('axios'); // Assuming you're using axios for API calls

// const scifiImageController = async (req, res) => {
//   try {
//     const { text } = req.body;

//     // Validate input
//     if (!text || typeof text !== 'string') {
//       return res.status(400).json({ message: "Invalid input: 'text' is required." });
//     }

//     // Replace with your actual Gemini API call
//     const response = await axios.post('https://api.gemini.example.com/v1/generate-image', {
//       prompt: `Generate a Sci-Fi image of ${text}`,
//       num_images: 1,
//       image_size: "512x512" // Adjust as per Gemini API requirements
//     });

//     // Assuming the API response contains the URL of the generated image
//     if (response.data && response.data.images && response.data.images[0].url) {
//       return res.status(200).json({ url: response.data.images[0].url });
//     } else {
//       return res.status(500).json({ message: "Image generation failed." });
//     }
//   } catch (err) {
//     console.error("Error generating image:", err);
//     return res.status(500).json({ message: "An error occurred while generating the image." });
//   }
// };

// module.exports = scifiImageController;

module.exports = {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController
};
