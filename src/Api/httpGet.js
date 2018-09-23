import { MakeRequest } from "./makeRequest";
export function GetRequest(apiPath, query) {
  //construct request options
  var options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      apiKey: "l7xxf90f2f436d3b48bba2a0d0ef5aec7008",
      apiSecret: "885c340e96ac4c7a9638c021ccbe8a01"
    }
  };
  var url = apiPath + "?" + query;
  console.log("Http get request: " + url);
  //start request
  return MakeRequest(url, options);
}
