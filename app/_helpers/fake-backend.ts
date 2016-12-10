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
            // let testUser = {username: 'Admin', password: 'Admin', firstName: 'Jan', lastName: 'Kowalski'};
            let testUsers = [
                {username: 'Admin', password: 'Admin', firstName: 'Jan', lastName: 'Kowalski'},
                {username: 'RYKOW', password: 'Hasło123!@#', firstName: 'Jan', lastName: 'Kowalski'}
            ];

            let clientsList = [
                {
                    id: 1,
                    firstName: 'Barbara',
                    lastName: 'Kozłowska',
                    // street: 'Dyliżansowa',
                    // streetNumber: '133',
                    // homeNumber: '4',
                    // city: 'Warszawa',
                    // postCode: '03-136',
                    pesel: '66111933943',
                    birthDate: '1983-01-19',
                    policiesCount: 0,
                    accountBalance: -29.99
                    
                },
                {
                    id: 2,
                    firstName: 'Lucjan',
                    lastName: 'Adamski',
                    // street: 'Darwina Karola',
                    // streetNumber: '12',
                    // homeNumber: '',
                    // city: 'Jaworzno',
                    // postCode: '43-603',
                    // pesel: '66122741513'
                    birthDate: '1939-11-14',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 3,
                    firstName: 'Marcelina',
                    lastName: 'Kwiatkowska',
                    // street: 'Gryfińska',
                    // streetNumber: '24',
                    // homeNumber: '3',
                    // city: 'Szczecin',
                    // postCode: '70-806',
                    pesel: '66052391084',
                    birthDate: '1978-02-16',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 4,
                    firstName: 'Wacława',
                    lastName: 'Król',
                    // street: 'Wodospadowa',
                    // streetNumber: '46',
                    // homeNumber: '13',
                    // city: 'Łódź',
                    // postCode: '92-018',
                    pesel: '42081489824',
                    birthDate: '1945-11-01',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 5,
                    firstName: 'Ryszard',
                    lastName: 'Grabowski',
                    // street: 'Zygmunta Augusta',
                    // streetNumber: '140',
                    // homeNumber: '153',
                    // city: 'Gdynia',
                    // postCode: '81-359',
                    pesel: '93111210552',
                    birthDate: '1969-12-23',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 6,
                    firstName: 'Teofil',
                    lastName: 'Wysocki',
                    // street: 'Willowa',
                    // streetNumber: '79',
                    // homeNumber: '15',
                    // city: 'Będzin',
                    // postCode: '42-506',
                    pesel: '71061271674',
                    birthDate:'1956-06-01',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 7,
                    firstName: 'Ewa',
                    lastName: 'Wysocka',
                    // street: 'Podchorążych',
                    // streetNumber: '17',
                    // homeNumber: '23',
                    // city: 'Warszawa',
                    // postCode: '03-136',
                    pesel: '97022541060',
                    birthDate:'1999-08-29',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 8,
                    firstName: 'Ryszard',
                    lastName: 'Kowalski',
                    // street: 'Podchorążych',
                    // streetNumber: '17',
                    // homeNumber: '23',
                    // city: 'Warszawa',
                    // postCode: '03-136',
                    pesel: '20010104499',
                    birthDate:'1920-01-01',
                    policiesCount: 0,
                    accountBalance: -29.99

                },
                {
                    id: 7,
                    firstName: 'Jan',
                    lastName: 'Kowalski',
                    // street: 'Podchorążych',
                    // streetNumber: '17',
                    // homeNumber: '23',
                    // city: 'Warszawa',
                    // postCode: '03-136',
                    pesel: '20010204521',
                    birthDate:'1920-01-02',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 10,
                    firstName: 'Jan',
                    lastName: 'Nowak',
                    // street: 'Rowerowa',
                    // streetNumber: '120',
                    // homeNumber: '',
                    // city: 'Lublin',
                    // postCode: '20-018',
                    pesel: '94111423160',
                    birthDate: '1994-02-14',
                    policiesCount: 0,
                    accountBalance: -29.99
                }
            ];

            let policiesList = [
                {
                    id: 1,
                    clientId: 1,
                    propertyId: 1,
                    name: 'Testowa polisa 1',
                    value: 20000,
                    monthlyCost: 430,
                    signedAt: '2016.01.30 16:10',
                    startedAt: '2016.02.01 00:00',
                    endedAt: '2017.02.01 23:59',
                    calculationType: 'Ręczny',
                    additionalInformation: ''
                },
                {
                    id: 2,
                    clientId: 2,
                    propertyId: 2,
                    name: 'Polisa na psa',
                    value: 15000,
                    monthlyCost: 340,
                    signedAt: '2015.01.30 16:10',
                    startedAt: '2015.02.01 00:00',
                    endedAt: '2019.02.01 23:59',
                    calculationType: 'Ręczny',
                    additionalInformation: ''
                },
                {
                    id: 3,
                    clientId: 1,
                    propertyId: 3,
                    name: 'Polisa na dom',
                    value: 52000,
                    monthlyCost: 600,
                    signedAt: '2014.03.30 16:10',
                    startedAt: '2014.04.01 00:00',
                    endedAt: '2027.07.01 23:59',
                    calculationType: 'Ręczny',
                    additionalInformation: ''
                },
                {
                    id: 4,
                    clientId: 3,
                    propertyId: 4,
                    name: 'Polisa na życie',
                    value: 39999,
                    monthlyCost: 400,
                    signedAt: '2016.09.30 16:10',
                    startedAt: '2016.10.01 00:00',
                    endedAt: '2047.12.01 23:59',
                    calculationType: 'Ręczny',
                    additionalInformation: ''
                }
            ];

            let propertyList = [
                {
                    id: 1,
                    clientId: 2,
                    name: 'Rower',
                    value: 16999,
                },
                {
                    id: 2,
                    clientId: 1,
                    name: 'Dom',
                    value: 450000,
                },
                {
                    id: 3,
                    clientId: 1,
                    name: 'iPhone',
                    value: 3200,
                },
                {
                    id: 4,
                    clientId: 1,
                    name: 'Laptop',
                    value: 2600,
                }
            ];

            function getPoliciesCache() {
                return cookieService.get('policiesListCache');
            }

            function getPolicy (id) {
                let policies = JSON.parse(getPoliciesCache());

                for (let policy of policies) {
                    if (policy.id === id) {
                        return policy;
                    }
                }

                return null;
            }

            function getPolicyIndex (id) {
                let policies = JSON.parse(getPoliciesCache());

                for (let i=0; i < policies.length; i++) {
                    if (policies[i].id === id) {
                        return i;
                    }
                }

                return null;
            }

            function getProperty (id) {
                let properties = JSON.parse(getPropertiesCache());

                for (let property of properties) {
                    if (property.id === id) {
                        return property;
                    }
                }

                return null;
            }

            function getPropertiesCache() {
                return cookieService.get('propertiesListCache');
            }

            function getPropertyIndex (id) {
                let properties = JSON.parse(getPropertiesCache());

                for (let i=0; i < properties.length; i++) {
                    if (properties[i].id === id) {
                        return i;
                    }
                }

                return null;
            }

            function getClientsCache() {
                return cookieService.get('clientsListCache');
            }

            function getClient (id) {
                let clients = JSON.parse(getClientsCache());

                for (let client of clients) {
                    if (client.id === id) {
                        return client;
                    }
                }

                return null;
            }

            function getClientIndex (id) {
                let clients = JSON.parse(getClientsCache());

                for (let i=0; i < clients.length; i++) {
                    if (clients[i].id === id) {
                        return i;
                    }
                }

                return null;
            }

            // cookieService.putObject('clientsListCache', clientsList);
            if (getClientsCache() == null) {
                cookieService.putObject('clientsListCache', clientsList);
            }

            // cookieService.putObject('policiesListCache', policiesList);
            if (getPoliciesCache() == null) {
                cookieService.putObject('policiesListCache', policiesList);
            }

            // cookieService.putObject('propertiesListCache', propertyList);
            if (getPropertiesCache() == null) {
                cookieService.putObject('propertiesListCache', propertyList);
            }

            setTimeout(() => {

                if (connection.request.url.endsWith('/api/clientExists') && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    let pesel = params.pesel;
                    let cachedList = JSON.parse(getClientsCache());
                    let exists = false;
                    for(var i = 0; i < cachedList.length; i++){
                        if (cachedList[i].pesel == pesel){
                            exists = true;
                            break;
                        }

                    }
                    connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: {exists: exists}})
                        ));
                }

                if (connection.request.url.endsWith('/api/login') && connection.request.method === RequestMethod.Post) {
                    let params = JSON.parse(connection.request.getBody());

                    let userValid = testUsers.filter(user => {
                        return params.username === user.username && params.password === user.password;
                    }).length === 1;

                    if (userValid) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: {token: sessionKey}})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200})
                        ));
                    }
                }

                if (connection.request.url.match('/api/users') && connection.request.method === RequestMethod.Get) {
                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: [testUsers]})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                function getClientPoliciesCount (clientId) {
                    let cachedPolicies = JSON.parse(getPoliciesCache());

                    return cachedPolicies.filter(item => item.clientId === clientId).length;
                }

                // Get clients list
                if (connection.request.url.endsWith('/api/clients') && connection.request.method === RequestMethod.Get) {
                    let clients = JSON.parse(getClientsCache());

                    for (let client of clients) {
                        client.policiesCount = getClientPoliciesCount(client.id);
                    }

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: clients})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                // Delete client
                if (connection.request.url.endsWith('/api/clients') && connection.request.method === RequestMethod.Delete) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = JSON.parse(getClientsCache());
                    let index = getClientIndex(params.id);
                    if(index != null)
                        cachedList.splice(index, 1);
                    cookieService.putObject('clientsListCache', cachedList);

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: {exists: true}})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                // Create Client
                if (connection.request.url.endsWith('/api/clients') && connection.request.method === RequestMethod.Post) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = JSON.parse(getClientsCache());
                    let client = params.body.client;
                    let newId = cachedList.sort((a,b) => {
                        if (a.id > b.id) {
                            return 1;
                        }

                        if (a.id < b.id) {
                            return -1;
                        }

                        return 0;
                    })[0].id + 1;

                    cachedList.push({
                        id: newId,
                        firstName: client.name,
                        lastName: client.lastname,
                        // street: client.street,
                        // streetNumber: client.streetNumber,
                        // homeNumber: client.homeNumber,
                        // city: client.city,
                        // postCode: client.postCode,
                        pesel: client.pesel,
                        birthDate: client.birthDate,
                        policiesCount: client.policiesCount
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

                // Show Client
                if (connection.request.url.match(/^\/api\/clients\/[0-9]+$/) && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    var currentClient = getClient(params.id);

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

                // Update client
                if (connection.request.url.match(/^\/api\/clients\/[0-9]+$/) && connection.request.method === RequestMethod.Patch) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = JSON.parse(getClientsCache());
                    let client = params.body.client;

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
                        // street: client.street,
                        // streetNumber: client.streetNumber,
                        // homeNumber: client.homeNumber,
                        // city: client.city,
                        // postCode: client.postCode,
                        pesel: client.pesel,
                        birthDate: client.birthDate,
                        policiesCount: client.policiesCount
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

                // Get Client's policies
                if (connection.request.url.match(/^\/api\/clients\/[0-9]+\/policies$/) && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = JSON.parse(getPoliciesCache());
                    var clientsPolicies = cachedList.filter(item => item.clientId === params.id);

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: clientsPolicies})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                // Get policies list
                if (connection.request.url.endsWith('/api/policies') && connection.request.method === RequestMethod.Get) {
                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: JSON.parse(getPoliciesCache())})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                // Create Policy
                if (connection.request.url.endsWith('/api/policies') && connection.request.method === RequestMethod.Post) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = JSON.parse(getPoliciesCache());
                    let policyData = params.body.policy;
                    let newId = cachedList.sort((a,b) => {
                            if (a.id > b.id) {
                                return 1;
                            }

                            if (a.id < b.id) {
                                return -1;
                            }

                            return 0;
                        })[0].id + 1;

                    policyData.signedAt = new Date(Date.now()).toLocaleString();

                    var policy = {
                        id: newId,
                        clientId: policyData.clientId,
                        propertyId: policyData.propertyId,
                        name: policyData.name,
                        value: policyData.value,
                        monthlyCost: policyData.monthlyCost,
                        startedAt: policyData.startedAt,
                        endedAt: policyData.endedAt,
                        signedAt: policyData.signedAt,
                        calculationType: policyData.calculationType,
                        additionalInformation: policyData.additionalInformation
                    };

                    cachedList.push(policy);
                    cookieService.putObject('policiesListCache', cachedList);

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

                // Show Policy
                if (connection.request.url.match(/^\/api\/policies\/[0-9]+$/) && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    var currentPolicy = getPolicy(params.id);

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: currentPolicy})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                // Delete Policy
                if (connection.request.url.endsWith('/api/policies') && connection.request.method === RequestMethod.Delete) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = JSON.parse(getPoliciesCache());
                    let policyIndex = getPolicyIndex(params.id);

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey && policyIndex !== null) {

                        cachedList.splice(policyIndex, 1);
                        cookieService.putObject('policiesListCache', cachedList);

                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: cachedList})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                // PROPERTIES

                // Get Client's properties
                if (connection.request.url.match(/^\/api\/clients\/[0-9]+\/properties$/) && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = JSON.parse(getPropertiesCache());
                    let clientProperties = cachedList.filter(item => item.clientId === params.id);

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: clientProperties})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                // Get properties list
                if (connection.request.url.endsWith('/api/properties') && connection.request.method === RequestMethod.Get) {
                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: JSON.parse(getPropertiesCache())})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                // Create Property
                if (connection.request.url.endsWith('/api/properties') && connection.request.method === RequestMethod.Post) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = JSON.parse(getPropertiesCache());
                    let propertyData = params.body.property;
                    let newId = cachedList.sort((a,b) => {
                            if (a.id > b.id) {
                                return -1;
                            }

                            if (a.id < b.id) {
                                return 1;
                            }

                            return 0;
                        })[0].id + 1;

                    console.log(propertyData);
                    console.log(newId);

                    var property = {
                        id: newId,
                        clientId: propertyData.clientId,
                        name: propertyData.name,
                        value: propertyData.value,
                    };

                    console.log(property);

                    cachedList.push(property);
                    cookieService.putObject('propertiesListCache', cachedList);

                    console.log(getPropertiesCache());

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

                // Show Property
                if (connection.request.url.match(/^\/api\/properties\/[0-9]+$/) && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    let property = getProperty(params.id);

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: property})
                        ));
                    } else {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 401})
                        ));
                    }
                }

                // Delete Property
                if (connection.request.url.endsWith('/api/properties') && connection.request.method === RequestMethod.Delete) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = JSON.parse(getPropertiesCache());
                    let propertyId = getPropertyIndex(params.id);

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey && propertyId !== null) {

                        cachedList.splice(propertyId, 1);
                        cookieService.putObject('propertiesListCache', cachedList);

                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: cachedList})
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