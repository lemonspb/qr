
interface Params {
    method: string,
    body?: string,
    headers: {}
}

export default class ApplicationServiсes {
    BASE_URL: string = "https://gist.githubusercontent.com/lemonspb/0987f658716b961db76cd70e79bdb244/raw/de22f3c88b436e88f999b17bcca5b8601e6f7680/";
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
