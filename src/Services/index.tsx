
interface Params {
    method: string,
    body?: string,
    headers: {}
}

export default class ApplicationServiсes {
    BASE_URL: string = "https://gist.githubusercontent.com/lemonspb/0987f658716b961db76cd70e79bdb244/raw/50b9597c53a57938929c7c3d643d4235ccd7194f";
    getResource =  (type: string) => {
        return fetch(`${this.BASE_URL}${type}`)
            .then((res) => {
                if (!res.ok) {
                    return res.status
                }
                return res.json()
            }).catch((e)=>{console.log(e)})
    };

    getListQuestions =  (body: string) => {
        const res =  this.getResource(body);
        return res
    };
}
