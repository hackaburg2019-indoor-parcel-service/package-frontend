
export interface IResponse<T> {
    status: string;
    code: number;
    message: string;
    data?: T;
}

export interface IApiPostDelivery {
    customer: string;
    locker: number;
}

export interface IApiPostPickDelivery {
    token: string;
}

export interface IDelivery {
    id?: string | any;
    user: IUser;
    station: IStation;
    lockNumber: number;
    picked: boolean;
    pickDate?: Date;
    token: string;
    delivered: Date;
}


export interface IStation {
    id?: any | string;
    etage: number;
    deviceIp: string;
    stationNumbers: number[];
    stationType: 'car' | 'station';
}

export interface IUser {
    id?: string | any;
    password: string;
    username: string;
    email: string;
    name: {
        firstname: string;
        lastname: string;
    }
}