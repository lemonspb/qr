import {mockupFirst} from '../Mockups'

interface Params {
  method: string,
  body?: string,
  headers: {}
}

export default class ApplicationServiсes {
  BASE_URL: string = "https://gist.github.com/lemonspb/";
  getResource = async (type: string, params: Params) => {
return fetch(`${this.BASE_URL}${type}`, {...params})
    .then((res) => {
       return  res.json()
      
    }).catch(e => {
      return e;
    });
  };

  getListQuestions = async (body: any) => {

    const params = {
      method: 'GET',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const res = this.getResource(`501baf5a628dfc6b6a0378df80c833d6#file-json`, params);
    return 
  };
}
