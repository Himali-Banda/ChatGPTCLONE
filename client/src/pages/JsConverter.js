// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   useTheme,
//   useMediaQuery,
//   TextField,
//   Button,
//   Alert,
//   Collapse,
//   Card,
// } from "@mui/material";

// const JsConverter = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   //media
//   const isNotMobile = useMediaQuery("(min-width: 1000px)");
//   // states
//   const [text, settext] = useState("");
//   const [code, setCode] = useState("");
//   const [error, setError] = useState("");

//   //register ctrl
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("/api/v1/openai/js-converter", {
//         text,
//       });
//       console.log(data);
//       setCode(data);
//     } catch (err) {
//       console.log(error);
//       if (err.response.data.error) {
//         setError(err.response.data.error);
//       } else if (err.message) {
//         setError(err.message);
//       }
//       setTimeout(() => {
//         setError("");
//       }, 5000);
//     }
//   };
//   return (
//     <Box
//       width={isNotMobile ? "40%" : "80%"}
//       p={"2rem"}
//       m={"2rem auto"}
//       borderRadius={5}
//       sx={{ boxShadow: 5 }}
//       backgroundColor={theme.palette.background.alt}
//     >
//       <Collapse in={error}>
//         <Alert severity="error" sx={{ mb: 2 }}>
//           {error}
//         </Alert>
//       </Collapse>
//       <form onSubmit={handleSubmit}>
//         <Typography variant="h3">JS Converter</Typography>

//         <TextField
//           placeholder="add your text"
//           type="text"
//           multiline={true}
//           required
//           margin="normal"
//           fullWidth
//           value={text}
//           onChange={(e) => {
//             settext(e.target.value);
//           }}
//         />

//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           size="large"
//           sx={{ color: "white", mt: 2 }}
//         >
//           Convert
//         </Button>
//         <Typography mt={2}>
//           not this tool ? <Link to="/">GO BACK</Link>
//         </Typography>
//       </form>

//       {code ? (
//         <Card
//           sx={{
//             mt: 4,
//             border: 1,
//             boxShadow: 0,
//             height: "500px",
//             borderRadius: 5,
//             borderColor: "natural.medium",
//             bgcolor: "background.default",
//             overflow: "auto",
//           }}
//         >
//           <pre>
//             <Typography p={2}>{code}</Typography>
//           </pre>
//         </Card>
//       ) : (
//         <Card
//           sx={{
//             mt: 4,
//             border: 1,
//             boxShadow: 0,
//             height: "500px",
//             borderRadius: 5,
//             borderColor: "natural.medium",
//             bgcolor: "background.default",
//           }}
//         >
//           <Typography
//             variant="h5"
//             color="natural.main"
//             sx={{
//               textAlign: "center",
//               verticalAlign: "middel",
//               lineHeight: "450px",
//             }}
//           >
//             Your Code Will Apprea Here
//           </Typography>
//         </Card>
//       )}
//     </Box>
//   );
// };

// export default JsConverter;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   useTheme,
//   useMediaQuery,
//   TextField,
//   Button,
//   Alert,
//   Collapse,
//   Card,
// } from "@mui/material";

// const JsConverter = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   // media query
//   const isNotMobile = useMediaQuery("(min-width: 1000px)");

//   // states
//   const [text, setText] = useState("");
//   const [code, setCode] = useState("");
//   const [error, setError] = useState("");

//   // handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Update the endpoint and payload as required by the Gemini API
//       const { data } = await axios.post("/api/v1/openai/jsconverter", {
//         text,
//       });
//       console.log(data);

//       // Handle the response format based on Gemini API documentation
//       // Assume `data` contains the generated code
//       setCode(data.generatedCode || data.code || ""); // Adjust according to actual response format
//     } catch (err) {
//       console.error(err);
//       if (err.response && err.response.data && err.response.data.error) {
//         setError(err.response.data.error);
//       } else if (err.message) {
//         setError(err.message);
//       }
//       setTimeout(() => {
//         setError("");
//       }, 5000);
//     }
//   };

//   return (
//     <Box
//       width={isNotMobile ? "40%" : "80%"}
//       p={"2rem"}
//       m={"2rem auto"}
//       borderRadius={5}
//       sx={{ boxShadow: 5 }}
//       backgroundColor={theme.palette.background.alt}
//     >
//       <Collapse in={!!error}>
//         <Alert severity="error" sx={{ mb: 2 }}>
//           {error}
//         </Alert>
//       </Collapse>
//       <form onSubmit={handleSubmit}>
//         <Typography variant="h3">JS Converter</Typography>

//         <TextField
//           placeholder="Add your text"
//           type="text"
//           multiline={true}
//           required
//           margin="normal"
//           fullWidth
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />

//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           size="large"
//           sx={{ color: "white", mt: 2 }}
//         >
//           Convert
//         </Button>
//         <Typography mt={2}>
//           Not this tool? <Link to="/">GO BACK</Link>
//         </Typography>
//       </form>

//       {code ? (
//         <Card
//           sx={{
//             mt: 4,
//             border: 1,
//             boxShadow: 0,
//             height: "500px",
//             borderRadius: 5,
//             borderColor: "natural.medium",
//             bgcolor: "background.default",
//             overflow: "auto",
//           }}
//         >
//           <pre>
//             <Typography p={2}>{code}</Typography>
//           </pre>
//         </Card>
//       ) : (
//         <Card
//           sx={{
//             mt: 4,
//             border: 1,
//             boxShadow: 0,
//             height: "500px",
//             borderRadius: 5,
//             borderColor: "natural.medium",
//             bgcolor: "background.default",
//           }}
//         >
//           <Typography
//             variant="h5"
//             color="natural.main"
//             sx={{
//               textAlign: "center",
//               verticalAlign: "middle",
//               lineHeight: "450px",
//             }}
//           >
//             Your Code Will Appear Here
//           </Typography>
//         </Card>
//       )}
//     </Box>
//   );
// };

// export default JsConverter;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   useTheme,
//   useMediaQuery,
//   TextField,
//   Button,
//   Alert,
//   Collapse,
//   Card,
// } from "@mui/material";

// const JsConverter = () => {
//   const theme = useTheme();
//   const isNotMobile = useMediaQuery("(min-width: 1000px)");

//   // states
//   const [text, setText] = useState("");
//   const [code, setCode] = useState("");
//   const [error, setError] = useState("");

//   // handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Update the endpoint to your Gemini API endpoint
//       const { data } = await axios.post("/api/v1/openai/jsconverter", {
//         text,
//       });

//       // Adjust according to the actual response format from Gemini API
//       setCode(data.generatedCode || data.code || ""); 
//     } catch (err) {
//       console.error(err);
//       // Handle errors gracefully
//       setError(err.response?.data?.error || err.message || 'An unexpected error occurred');
//       setTimeout(() => {
//         setError("");
//       }, 5000);
//     }
//   };

//   return (
//     <Box
//       width={isNotMobile ? "40%" : "80%"}
//       p={"2rem"}
//       m={"2rem auto"}
//       borderRadius={5}
//       sx={{ boxShadow: 5 }}
//       backgroundColor={theme.palette.background.alt}
//     >
//       <Collapse in={!!error}>
//         <Alert severity="error" sx={{ mb: 2 }}>
//           {error}
//         </Alert>
//       </Collapse>
//       <form onSubmit={handleSubmit}>
//         <Typography variant="h3">JS Converter</Typography>

//         <TextField
//           placeholder="Add your text"
//           type="text"
//           multiline
//           required
//           margin="normal"
//           fullWidth
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />

//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           size="large"
//           sx={{ color: "white", mt: 2 }}
//         >
//           Convert
//         </Button>
//         <Typography mt={2}>
//           Not this tool? <Link to="/">GO BACK</Link>
//         </Typography>
//       </form>

//       {code ? (
//         <Card
//           sx={{
//             mt: 4,
//             border: 1,
//             boxShadow: 0,
//             height: "500px",
//             borderRadius: 5,
//             borderColor: "natural.medium",
//             bgcolor: "background.default",
//             overflow: "auto",
//           }}
//         >
//           <pre>
//             <Typography p={2}>{code}</Typography>
//           </pre>
//         </Card>
//       ) : (
//         <Card
//           sx={{
//             mt: 4,
//             border: 1,
//             boxShadow: 0,
//             height: "500px",
//             borderRadius: 5,
//             borderColor: "natural.medium",
//             bgcolor: "background.default",
//           }}
//         >
//           <Typography
//             variant="h5"
//             color="natural.main"
//             sx={{
//               textAlign: "center",
//               verticalAlign: "middle",
//               lineHeight: "450px",
//             }}
//           >
//             Your Code Will Appear Here
//           </Typography>
//         </Card>
//       )}
//     </Box>
//   );
// };

// export default JsConverter;

////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   useTheme,
//   useMediaQuery,
//   TextField,
//   Button,
//   Alert,
//   Collapse,
//   Card,
// } from "@mui/material";

// const JsConverter = () => {
//   const theme = useTheme();
//   const isNotMobile = useMediaQuery("(min-width: 1000px)");

//   // states
//   const [text, setText] = useState("");
//   const [code, setCode] = useState("");
//   const [error, setError] = useState("");

//   // handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Update the endpoint to match your API endpoint
//       const { data } = await axios.post("/api/v1/openai/jsconverter", {
//         text,
//       });

//       // Log the response to check its structure
//       console.log("API response:", data);

//       // Adjust according to the actual response format from the API
//       setCode(data.generatedCode || data.code || "");
//     } catch (err) {
//       console.error("API error:", err);
//       // Handle errors gracefully
//       setError(err.response?.data?.error || err.message || 'An unexpected error occurred');
//       setTimeout(() => {
//         setError("");
//       }, 5000);
//     }
//   };

//   return (
//     <Box
//       width={isNotMobile ? "40%" : "80%"}
//       p={"2rem"}
//       m={"2rem auto"}
//       borderRadius={5}
//       sx={{ boxShadow: 5 }}
//       backgroundColor={theme.palette.background.alt}
//     >
//       <Collapse in={!!error}>
//         <Alert severity="error" sx={{ mb: 2 }}>
//           {error}
//         </Alert>
//       </Collapse>
//       <form onSubmit={handleSubmit}>
//         <Typography variant="h3">JS Converter</Typography>

//         <TextField
//           placeholder="Add your text"
//           type="text"
//           multiline
//           required
//           margin="normal"
//           fullWidth
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />

//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           size="large"
//           sx={{ color: "white", mt: 2 }}
//         >
//           Convert
//         </Button>
//         <Typography mt={2}>
//           Not this tool? <Link to="/">GO BACK</Link>
//         </Typography>
//       </form>

//       {code ? (
//         <Card
//           sx={{
//             mt: 4,
//             border: 1,
//             boxShadow: 0,
//             height: "500px",
//             borderRadius: 5,
//             borderColor: "natural.medium",
//             bgcolor: "background.default",
//             overflow: "auto",
//           }}
//         >
//           <pre>
//             <Typography p={2}>{code}</Typography>
//           </pre>
//         </Card>
//       ) : (
//         <Card
//           sx={{
//             mt: 4,
//             border: 1,
//             boxShadow: 0,
//             height: "500px",
//             borderRadius: 5,
//             borderColor: "natural.medium",
//             bgcolor: "background.default",
//           }}
//         >
//           <Typography
//             variant="h5"
//             color="natural.main"
//             sx={{
//               textAlign: "center",
//               verticalAlign: "middle",
//               lineHeight: "450px",
//             }}
//           >
//             Your Code Will Appear Here
//           </Typography>
//         </Card>
//       )}
//     </Box>
//   );
// };

// export default JsConverter;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
  Card,
} from "@mui/material";

const JsConverter = () => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  // State variables
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setCode("");  // Clear previous code

    try {
      // Update the endpoint to match your API endpoint
      const { data } = await axios.post("/api/v1/openai/jsconverter", { text });

      // Log the response to check its structure
      console.log("API response:", data);

      // Check the correct property based on your API response
      setCode(data.response || data.generatedCode || data.code || "");
    } catch (err) {
      console.error("API error:", err);
      // Handle errors gracefully
      setError(err.response?.data?.message || err.message || 'An unexpected error occurred');
    }
  };

  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
    >
      <Collapse in={!!error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">JS Converter</Typography>

        <TextField
          placeholder="Add your text"
          type="text"
          multiline
          required
          margin="normal"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ color: "white", mt: 2 }}
        >
          Convert
        </Button>
        <Typography mt={2}>
          Not this tool? <Link to="/">GO BACK</Link>
        </Typography>
      </form>

      {code ? (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "background.default",
            overflow: "auto",
          }}
        >
          <pre>
            <Typography p={2} component="div">
              {code}
            </Typography>
          </pre>
        </Card>
      ) : (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "background.default",
          }}
        >
          <Typography
            variant="h5"
            color="natural.main"
            sx={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "450px",
            }}
          >
            Your Code Will Appear Here
          </Typography>
        </Card>
      )}
    </Box>
  );
};

export default JsConverter;
