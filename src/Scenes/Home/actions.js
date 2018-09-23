import { GetRequest } from "../../Api/httpGet";
const reservationApiUrl =
  "https://api.turkishairlines.com/test/retrieveReservationDetail";

export function getReservationData(pnr, lastName) {
  return async dispatch => {
    pnr = "TT8VN8";
    lastName = "CELIKTAS";
    var query = "UniqueId=" + pnr + "&Surname=" + lastName;
    var response = await GetRequest(reservationApiUrl, query);
    console.log(response);
    if (response.body) {
      var body = response.body;
      try {
        var mobilePhone =
          body.data.retrieveReservationOTAResponse.contact.mobilePhone;
        var person =
          body.data.retrieveReservationOTAResponse.OTA_AirBookRS.AirReservation
            .TravelerInfo.AirTraveler.PersonName;

        var passengerName =
          person.NamePrefix + " " + person.GivenName + " " + person.Surname;
        dispatch({
          type: "SetPassengerPhone",
          payload: mobilePhone
        });
        dispatch({
          type: "SetPassengerName",
          payload: passengerName
        });
        alert("Hos geldin " + passengerName);
      } catch (error) {}
    }
  };
}
