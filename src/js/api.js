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
}
