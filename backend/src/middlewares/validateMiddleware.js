const validate = (schema) => (req, res, next) => {
  try {
    // Parse the request body using the provided schema
    const parsedBody = schema.parse(req.body);

    // If validation passes, update req.body with validated data
    req.body = parsedBody;
    next(); // Proceed to the next middleware/controller
  } catch (error) {
    // If validation fails, return an error response
    return res.status(400).json({
      success: false,
      errors: error.errors?.map((err) => err.message) || [
        "Invalid request data",
      ],
    });
  }
};

export default validate;
