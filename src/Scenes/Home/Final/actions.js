import { PostRequest } from "../../../Api/httpPost";
const apiPath = "http://tims.turkcell.com.tr/tes/rest/spi/sendmsgserv";
export function sendMessage() {
  return async (dispatch, getState) => {
    var state = getState();
    var phoneNumber = state.getIn(["Home", "base", "passengerPhone"]);
    var header = {
      username: "bu8505115376474670",
      password: "4418792381"
    };
    var request = {
      txnid: "200",
      reciever: {
        type: 2,
        address: "905446096165"
      },
      composition: {
        list: [
          {
            type: 0,
            message: "Hello World!"
          }
        ]
      }
    };
    debugger;
    var response = await PostRequest(apiPath, request, header);
    console.log(response);
    debugger;
  };
}
