export async function MakeRequest(url, options) {
  try {
    let response = await fetch(url, options);
    debugger;
    let isError = !(response.status < 300 && response.status >= 200);
    let responseBody = await response.json();
    var responseModel = {};
    responseModel.header = response.headers.map;
    if (isError) {
      responseModel.error = responseBody;
    } else {
      responseModel.body = responseBody;
    }
    return responseModel;
  } catch (error) {
    debugger;
    console.error(error);
  }
}
