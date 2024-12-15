const BASE_URL = "https://api.github.com/users/";

export const commonFetch = async (
  method,
  queryParams,
  queryString,
  payload
) => {
  try {
    let finalEndPoint = BASE_URL;
    if (queryParams) {
      finalEndPoint += queryParams;
    }
    if (queryString) {
      finalEndPoint += "?" + queryString;
    }
    let content;
    switch (method) {
      case "POST":
      case "PATCH":
        content = {
          method,
          body: JSON.stringify(payload),
        };
        break;
      case "GET":
      case "DELETE":
        content = {
          method,
        };
        break;
      default:
    }
    const response = await fetch(finalEndPoint, content);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};
