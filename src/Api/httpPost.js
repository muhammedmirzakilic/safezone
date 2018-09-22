import { MakeRequest } from "./makeRequest";
import { Buffer } from "buffer";
export function PostRequest(apiPath, data, header = null) {
  var stringData = JSON.stringify(data);
  //construct request options
  var request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Content-Length": Buffer.byteLength(stringData)
    },
    keepalive: true,
    body: JSON.stringify(data, (key, value) => {
      if (key === "sessionId" || key === "sessionToken") return undefined;
      return value;
    }) //exclude sessionId and token from request body
  };
  if (header) {
    request.headers = {
      ...request.headers,
      Authorization: "Basic " + btoa(header.username + ":" + header.password)
    };
  }
  //start request
  console.log("Request Header: " + JSON.stringify(request.headers));
  console.log("Request Body: " + request.body);
  return MakeRequest(apiPath, request);
}
