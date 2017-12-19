import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/filter';
import  'rxjs/add/operator/catch';

import { User } from './user.modal';
import { REST_API } from '../../app/app.api';
import { ErrorHandler } from '../../app/app.error-handler';
import { Post } from '../../components/post/post.modal';
import { filter } from 'rxjs/operator/filter';

@Injectable()
export class UserService{

    constructor(private http: Http)
    {

    }

    //Retorna todos os usuarios da db
    users(): Observable< User[] >
    {
        return this.http.get(`${REST_API}/users/`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }

    //Retorna um usuario pelo Id
    getUserById(id: number) : Observable< User >
    {
        return this.http.get(`${REST_API}/users/${id}/`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }

    getPostById(id: number): Observable< Post >
    {                                 
        return this.http.get(`${REST_API}/posts/${id}`)
        .map(response => response.json())         
        .catch(ErrorHandler.handlerError)  
    }

    //retorna todos os posts da db
    posts(): Observable< Post[] >
    {
        return this.http.get(`${REST_API}/posts/`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }

}