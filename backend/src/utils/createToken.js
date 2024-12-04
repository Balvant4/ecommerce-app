import jwt from "jsonwebtoken"; // Import JSON Web Token library

const createToken = (data) => {
  try {
    // Generate the token using jwt.sign
    const token = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: "1d", // Token expiration set to 1 day
    });
    return token; // Return the generated token
  } catch (error) {
    console.error("Error creating token:", error); // Log any errors
    throw new Error("Token generation failed");
  }
};

export default createToken;
