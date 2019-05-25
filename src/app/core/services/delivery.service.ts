
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { IApiPostDelivery, IApiPostPickDelivery, IDelivery, IResponse } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class DeliveryService {
    constructor(
        private apiService: ApiService
    ) {}

    createDelivery(delivery: IApiPostDelivery): Observable<IResponse<IDelivery>> {
        return this.apiService.post('/delivery', delivery);
    }

    pickup(newPickup: IApiPostPickDelivery): Observable<IResponse<any>> {
        return this.apiService.post('/delivery/pick', newPickup);
    }
}