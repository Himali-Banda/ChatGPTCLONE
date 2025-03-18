// // const express = require('express');
// // const router = express.Router();
// // const {
// //     summaryController,
// //     paragraphController,
// //     chatbotController,
// //     jsconverterController,
// //     scifiImageController,

// // } = require("../controllers/openaiController");

// // //const router = express.Router();


// // //route
// // router.post("/summary", summaryController);
// // router.post("/paragraph", paragraphController);
// // router.post("/chatbot", chatbotController);
// // router.post("/js-converter", jsconverterController);
// // router.post("/scifi-image", scifiImageController);




// // module.exports = router;

// const express = require('express');
// const router = express.Router();

// // Import your controllers or route handlers

// const {
//     summaryController,
//     paragraphController,
//     chatbotController,
//     jsconverterController,
//     scifiImageController
// } = require('../controllers/openaiController'); // Adjust the path if necessary

// // Define routes and attach controllers
// router.post('/summary', summaryController);
// router.post('/paragraph', paragraphController);
// router.post('/chatbot', chatbotController);
// router.post('/jsconverter', jsconverterController);
// router.post('/scifi-image', scifiImageController);

// module.exports = router;

//////////////////////////////////////////////////////////////////////////

const express = require('express');
const router = express.Router();

// Import controllers
const {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController
} = require('../controllers/openaiController'); // Ensure this path is correct

// Define routes
router.post('/summary', summaryController);
router.post('/paragraph', paragraphController);
router.post('/chatbot', chatbotController);
router.post('/jsconverter', jsconverterController);
router.post('/scifi-image', scifiImageController);


module.exports = router;
