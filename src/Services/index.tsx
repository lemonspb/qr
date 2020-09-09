import {mockupFirst} from '../Mockups'

interface Params {
  method: string,
  body?: string,
  headers: {}
}

export default class ApplicationServiсes {
  BASE_URL: string = "https://gist.githubusercontent.com/lemonspb/0987f658716b961db76cd70e79bdb244/raw/29796a52108f37e055e1cf7b144954754c831553";
  getResource = async (type: string) => {
return fetch(`${this.BASE_URL}${type}`)
    .then((res) => {
        console.log(res)
       return  res.json()
      
    }).catch(e => {
      return e;
    });
  };

  getListQuestions = async (body: any) => {


    const res = this.getResource(body);
    return res
  };
}
