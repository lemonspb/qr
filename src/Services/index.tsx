
interface Params {
  method: string,
  body?: string,
  headers: {}
}

export default class ApplicationServiсes {
  BASE_URL: string = "";
  getResource = async (type: string, params: Params) => {
return fetch(`${this.BASE_URL}${type}`, {...params})
    .then(res => {
      if (!res.ok) {
        return {
          status: 'error',
          resResult: res.json(),
        };
      }
      else{
        return {
        status: 'ok',
        resResult: res.json(),
        }
      }
    }).catch(e => {
      return e;
    });
  };

  getListQuestions = async (body: any) => {

  
  };
}
