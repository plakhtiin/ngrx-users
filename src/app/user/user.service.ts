import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  private slug = environment.usersAPI;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${ environment.apiUrl }${ this.slug }`);
  }

  getUserById(userId: number): Observable<IUser> {
    return this.http.get<IUser>(`${ environment.apiUrl }${ this.slug }/${ userId }`);
  }
}
