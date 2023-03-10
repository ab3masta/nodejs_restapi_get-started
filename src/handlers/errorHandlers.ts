/*
  Catch Errors Handler
*/

export const catchErrors = (fn) => {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => {
      //Validation Errors
      if (typeof err === "string") {
        res.status(400).json({
          message: err,
        });
      } else {
        next(err);
      }
    });
  };
};

/*
  MongoDB Validation Error Handler

  Detect if there are mongodb validation errors that we send them nicely back.
*/

export const mongoseErrors = (err, req, res, next) => {
  if (!err.errors) return next(err);
  const errorKeys = Object.keys(err.errors);
  let message = "";
  errorKeys.forEach((key) => (message += err.errors[key].message + ", "));

  message = message.substr(0, message.length - 2);

  res.status(400).json({
    status: 400,
    messageCodeText: message,
    responseData: null,
  });
};

/*
  Development Error Handler

  In development we show good error messages so if we hit a syntax error or any other previously un-handled error, we can show good info on what happened
*/
export const developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || "";
  const errorDetails = {
    code: err.code,
    message: err.message,
    status: err.status,
    stack: err.stack,
  };

  res.status(err.status || 500).json({
    status: 500,
    messageCodeText: errorDetails,
    responseData: null,
  }); // send JSON back
};

/*
  Production Error Handler

  No stacktraces and error details are leaked to user
*/
export const productionErrors = (err, req, res, next) => {
  res.status(err.status || 500).json({
    status: 500,
    messageCodeText: "Internal Server Error",
    responseData: null,
  }); // send JSON back
};

/*
404 Page Error
*/

export const notFound = (req, res, next) => {
  res.status(404).json({
    status: 404,
    messageCodeText: "Route not found",
    responseData: null,
  });
};
