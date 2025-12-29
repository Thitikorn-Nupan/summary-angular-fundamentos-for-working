import {Injectable} from '@angular/core';
import { Endpoint } from '../config/endpoint';

// @Injectable()
export class EndpointService {

  public static getUrlLearnEnvTsWithApi(): string {
    return Endpoint.PROTOCOL + Endpoint.DOMAIN_AND_PATH;
  }

}

