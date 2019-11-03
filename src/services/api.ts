import { Config } from 'react-native-config';
import { RequestType } from '../enums/RequestType';
import { IShow } from '../interfaces/IShow';
import { async } from 'q';
import { IUser } from '../interfaces/IUser';

const API_URL = Config.API_URL;

interface RequestOptions {
  body?: string;
  method?: RequestType;
  headers?: Headers;
}

async function parseResponse(res: Response): Promise<any> {
  return new Promise((resolve, reject) => {
    if (res.status > 200) {
      return reject(res.statusText);
    } else {
      const content = res.json();
      return resolve(content);
    }
  })
}

async function request(endpoint: string, type: RequestType, requestData?: any): Promise<any> {
  const options: RequestOptions = {
    method: type,
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };

  if (type === RequestType.POST && requestData) {
    options.body = JSON.stringify(requestData)
  }

  const response = await fetch(`${API_URL}/${endpoint}`, {...options})

  await parseResponse(response)
    .then((parsedResponse: any) => {
      return parsedResponse.data;
    })
    .catch((error: string) => {
      // ERROR handling
    });
}

export async function getShows(): Promise<Array<IShow>> {
  return request('shows', RequestType.GET);
}

export async function getShow(id: string): Promise<IShow> {
  return request(`shows/${id}`, RequestType.GET);
}

export async function getSession(userData: IUser): Promise<any> {
  return request('users/sessions', RequestType.POST, userData);
}

export async function registerUser(userData: IUser): Promise<any> {
  return request('users', RequestType.POST, userData);
}