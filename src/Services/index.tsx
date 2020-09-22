import { BASE_URL } from '../Constants';
import { IQuiz } from '../Interfaces';

interface Params {
    method: string,
    body?: string,
    headers: {}
}
interface Result {
    method: string,
    body?: string,
    headers: {}
}

export default class ApplicationServiсes {
    getResource = (type: string, params: Params) => {
        return fetch(`${BASE_URL}${type}`, { ...params })
            .then((res) => {
                if (!res.ok) {
                    const result:IQuiz = {}
                    result.status = res.status
                    return result
                }
                return res.json()
            })
    };

    getQuizList = (type: string) => {
        const params = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const res = this.getResource(`quiz/${type}`, params);
        return res
    };

    sendQuizList = (body: IQuiz) => {
        const params = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const res = this.getResource('quiz_result', params);
        return res
    };
}

