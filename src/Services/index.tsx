
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
                if (!res.ok) {
                    return false
                }
                return res.json()
            })
    };

    getListQuestions = async (body: string) => {
        const res = await this.getResource(body);
        return res
    };
}
