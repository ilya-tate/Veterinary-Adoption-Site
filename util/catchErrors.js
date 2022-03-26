const catchErrors = (error) => {
  let errorMsg;

  if (error.response) {
    errorMsg = error.response.data;
    console.log(errorMsg);
  } else if (error.request) {
    errorMsg = error.request;
    console.log(errorMsg);
  } else {
    errorMsg = error.message;
    console.log(errorMsg);
  }
  return errorMsg;
};

export default catchErrors;
