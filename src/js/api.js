export class ApiRequest {
  constructor() {

  }

  getApiResponse(url) {
    const apiResponse = new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.onload = () => {
        if (request.status === 200) {
          const response = JSON.parse(request.response);
          resolve(response);
        } else {
          reject(request.statusText);
        }
      };
      request.open("GET", url, true);
      request.send();
    });

    return apiResponse;
  }

  getLocation(zip, url) {
    return fetch(url)
      .then(response => {
        const json = (response.status === 200) ? response.json() : false;
        this.zipResponseStatus = response.status;
        return json;
      })
      .then(json => {
        if (json && json.lat) {
          return [
            parseFloat(json.lat).toFixed(3),
            parseFloat(json.lng).toFixed(3)
          ];
        } else {
          return false;
        }
      });
  }

}
