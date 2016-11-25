import {Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {CookieService} from "angular2-cookie/core";
import {cache} from "rxjs/operator/cache";

export let fakeBackendProvider = {
    provide: Http,
    useFactory: (backend, options, cookie) => {
        let cookieService = cookie;
        backend.connections.subscribe((connection: MockConnection) => {
            let sessionKey = '8348sdkj983jsdk9jsd';
            let testUser = {username: 'Admin', password: 'Admin', firstName: 'Jan', lastName: 'Kowalski'};

            let clientsList = [
                {
                    id: 0,
                    firstName: 'Jan',
                    lastName: 'Nowak',
                    street: 'Rowerowa',
                    streetNumber: '120',
                    homeNumber: '',
                    city: 'Lublin',
                    postCode: '20-018',
                    pesel: '94111423160'
                },
                {
                    id: 1,
                    firstName: 'Barbara',
                    lastName: 'Kozłowska',
                    street: 'Dyliżansowa',
                    streetNumber: '133',
                    homeNumber: '4',
                    city: 'Warszawa',
                    postCode: '03-136',
                    pesel: '66111933943'
                },
                {
                    id: 2,
                    firstName: 'Lucjan',
                    lastName: 'Adamski',
                    street: 'Darwina Karola',
                    streetNumber: '12',
                    homeNumber: '',
                    city: 'Jaworzno',
                    postCode: '43-603',
                    pesel: '66122741513'
                },
                {
                    id: 3,
                    firstName: 'Marcelina',
                    lastName: 'Kwiatkowska',
                    street: 'Gryfińska',
                    streetNumber: '24',
                    homeNumber: '3',
                    city: 'Szczecin',
                    postCode: '70-806',
                    pesel: '66052391084'
                },
                {
                    id: 4,
                    firstName: 'Wacława',
                    lastName: 'Król',
                    street: 'Wodospadowa',
                    streetNumber: '46',
                    homeNumber: '13',
                    city: 'Łódź',
                    postCode: '92-018',
                    pesel: '42081489824'
                },
                {
                    id: 5,
                    firstName: 'Ryszard',
                    lastName: 'Grabowski',
                    street: 'Zygmunta Augusta',
                    streetNumber: '140',
                    homeNumber: '153',
                    city: 'Gdynia',
                    postCode: '81-359',
                    pesel: '93111210552'
                },
                {
                    id: 6,
                    firstName: 'Teofil',
                    lastName: 'Wysocki',
                    street: 'Willowa',
                    streetNumber: '79',
                    homeNumber: '15',
                    city: 'Będzin',
                    postCode: '42-506',
                    pesel: '71061271674'
                },
                {
                    id: 7,
                    firstName: 'Ewa',
                    lastName: 'Wysocka',
                    street: 'Podchorążych',
                    streetNumber: '17',
                    homeNumber: '23',
                    city: 'Warszawa',
                    postCode: '03-136',
                    pesel: '97022541060'
                },
            ];
            if (cookieService.get('clientsListCache') == null)
                cookieService.putObject('clientsListCache', clientsList);

            setTimeout(() => {
                if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                    let params = JSON.parse(connection.request.getBody());
                    if (params.username === testUser.username && params.password === testUser.password) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: {token: sessionKey}})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200})
                        ));
                    }
                }

                if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: [testUser]})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                if (connection.request.url.endsWith('/api/clientsList') && connection.request.method === RequestMethod.Get) {
                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: JSON.parse(cookieService.get('clientsListCache'))})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                if (connection.request.url.endsWith('/api/removeClient') && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = JSON.parse(cookieService.get('clientsListCache'));
                    cachedList.splice(params.index, 1);
                    cookieService.putObject('clientsListCache', cachedList);
                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: cachedList})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                if (connection.request.url.endsWith('/api/addClient') && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = JSON.parse(cookieService.get('clientsListCache'));
                    let client = params.client;
                    cachedList.push({
                        id: cachedList.length,
                        firstName: client.name,
                        lastName: client.lastname,
                        street: client.street,
                        streetNumber: client.streetNumber,
                        homeNumber: client.homeNumber,
                        city: client.city,
                        postCode: client.postCode,
                        pesel: client.pesel
                    });
                    cookieService.putObject('clientsListCache', cachedList);
                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                if (connection.request.url.endsWith('/api/showClient') && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = JSON.parse(cookieService.get('clientsListCache'));
                    var currentClient = cachedList[params.index];
                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: currentClient})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }
                if (connection.request.url.endsWith('/api/editClient') && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = JSON.parse(cookieService.get('clientsListCache'));
                    let client = params.client;
                    console.log('client: ', client);
                    console.log('params: ', params);

                    let i;
                    for (i=0; i < cachedList.length; i++) {
                        if ( cachedList[i].id == client.id) {
                            break;
                        }
                    }

                    cachedList[i] = {
                        id: cachedList[i].id,
                        firstName: client.firstName,
                        lastName: client.lastName,
                        street: client.street,
                        streetNumber: client.streetNumber,
                        homeNumber: client.homeNumber,
                        city: client.city,
                        postCode: client.postCode,
                        pesel: client.pesel
                    };
                    cookieService.putObject('clientsListCache', cachedList);
                    var currentClient = cachedList[params.index];
                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: currentClient})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

            }, 500);

        });

        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions, CookieService]
};