import {Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {CookieService} from "angular2-cookie/core";

export let fakeBackendProvider = {
    provide: Http,
    useFactory: (backend, options, cookie) => {
        let cookieService = cookie;
        backend.connections.subscribe((connection: MockConnection) => {
            let sessionKey = '8348sdkj983jsdk9jsd';
            let testUsers = [
                {username: 'Admin', password: 'Admin', name: 'Jan', surname: 'Kowalski'},
                {username: 'RYKOW', password: 'Hasło123!@#', name: 'Jan', surname: 'Kowalski'}
            ];

            let clientsList = [
                {
                    id: 1,
                    name: 'Barbara',
                    surname: 'Kozłowska',
                    pesel: '66111933943',
                    birthDate: '1983-01-19',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 2,
                    name: 'Lucjan',
                    surname: 'Adamski',
                    birthDate: '1939-11-14',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 3,
                    name: 'Marcelina',
                    surname: 'Kwiatkowska',
                    pesel: '66052391084',
                    birthDate: '1978-02-16',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 4,
                    name: 'Wacława',
                    surname: 'Król',
                    pesel: '42081489824',
                    birthDate: '1945-11-01',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 5,
                    name: 'Ryszard',
                    surname: 'Grabowski',
                    pesel: '93111210552',
                    birthDate: '1969-12-23',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 6,
                    name: 'Teofil',
                    surname: 'Wysocki',
                    pesel: '71061271674',
                    birthDate: '1956-06-01',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 7,
                    name: 'Ewa',
                    surname: 'Wysocka',
                    pesel: '97022541060',
                    birthDate: '1999-08-29',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 8,
                    name: 'Ryszard',
                    surname: 'Kowalski',
                    pesel: '20010104499',
                    birthDate: '1920-01-01',
                    policiesCount: 0,
                    accountBalance: -29.99

                },
                {
                    id: 9,
                    name: 'Jan',
                    surname: 'Kowalski',
                    pesel: '20010204521',
                    birthDate: '1920-01-02',
                    policiesCount: 1,
                    accountBalance: -29.99
                },
                {
                    id: 10,
                    name: 'Jan',
                    surname: 'Nowicki',
                    pesel: '94111423160',
                    birthDate: '1994-02-14',
                    policiesCount: 0,
                    accountBalance: -29.99
                },
                {
                    id: 11,
                    name: 'Stanisław',
                    surname: 'Nowak',
                    pesel: '94028394928',
                    birthDate: '1994-02-14',
                    policiesCount: 1,
                    accountBalance: 20.99
                }
            ];

            let policiesList = [
                {
                    id: 1,
                    clientId: 9,
                    propertyId: 1,
                    value: 16999,
                    monthlyCost: 29.99,
                    signedAt: '2016-01-01',
                    startedAt: '2016-01-01',
                    endedAt: '2017-01-01',
                    calculationType: 'Ręczny',
                    additionalInformation: '',
                    property: 'Rower',
                    propertyAdditionalInformation: 'Rower marki Ukraina, w stanie dobrym',
                    name: 'Jan',
                    surname: 'Kowalski',
                },
                {
                    id: 2,
                    clientId: 11,
                    propertyId: 2,
                    value: 9990000,
                    monthlyCost: 1670,
                    signedAt: '2016-02-02',
                    startedAt: '2016-02-02',
                    endedAt: '2017-02-02',
                    calculationType: 'Ręczny',
                    additionalInformation: '',
                    property: 'Mieszkanie',
                    propertyAdditionalInformation: '',
                    name: 'Stanisław',
                    surname: 'Nowak',
                }
            ];

            let propertyList = [
                {
                    id: 1,
                    clientId: 9,
                    name: 'Rower',
                    value: 16999,
                    propertyAdditionalInformation: 'Rower marki Ukraina, w stanie dobrym'
                },
                {
                    id: 2,
                    clientId: 11,
                    name: 'Mieszkanie',
                    value: 9990000,
                    propertyAdditionalInformation: ''
                },
                {
                    id: 3,
                    clientId: 9,
                    name: 'Dom',
                    value: 16999,
                    propertyAdditionalInformation: 'Dom w rejonie zalewowym.'
                }
            ];

            function getPoliciesCache() {
                return JSON.parse(cookieService.get('policiesListCache'));
            }

            function getPolicy(id) {
                let policies = getPoliciesCache();

                for (let policy of policies) {
                    if (policy.id === id) {
                        return policy;
                    }
                }

                return null;
            }

            function getPolicyIndex(id) {
                let policies = getPoliciesCache();

                for (let i = 0; i < policies.length; i++) {
                    if (policies[i].id === id) {
                        return i;
                    }
                }

                return null;
            }

            function getProperty(id) {
                let properties = getPropertiesCache();

                for (let property of properties) {
                    if (property.id === id) {
                        return property;
                    }
                }

                return null;
            }

            function getPropertiesCache() {
                return JSON.parse(cookieService.get('propertiesListCache'));
            }

            function getPropertyIndex(id) {
                let properties = getPropertiesCache();

                for (let i = 0; i < properties.length; i++) {
                    if (properties[i].id === id) {
                        return i;
                    }
                }

                return null;
            }

            function getClientsCache() {
                return JSON.parse(cookieService.get('clientsListCache'));
            }

            function getClient(id) {
                let clients = getClientsCache();

                for (let client of clients) {
                    if (client.id === id) {
                        return client;
                    }
                }

                return null;
            }

            function getClientIndex(id) {
                let clients = getClientsCache();

                for (let i = 0; i < clients.length; i++) {
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

            let isAuthorized = function () {
                return sessionKey != null && connection.request.headers.get('Authorization') === 'Bearer ' + sessionKey;
            };

            let responseFailure = function () {
                connection.mockRespond(new Response(
                    new ResponseOptions({status: 401})
                ));
            };

            let responseSuccess = function (body) {
                connection.mockRespond(new Response(
                    new ResponseOptions({status: 200, body: body})
                ));
            };

            function compareId(a, b) {
                if (a.id < b.id) {
                    return -1;
                }

                if (a.id > b.id) {
                    return 1;
                }

                return 0;
            }

            let generateNewId = function (cachedList: any) {
                if (cachedList.length === 0) {
                    return 1;
                }

                let last = cachedList.sort(compareId).reverse()[0];

                return last.id + 1;
            };

            let getClientPolicies = function (clientId) {
                let cachedPolicies = getPoliciesCache();

                return cachedPolicies.filter(item => item.clientId === clientId);
            };

            let getClientPoliciesCount = function (clientId) {
                return getClientPolicies(clientId).length;
            };

            let getResponseParams = function () {
                return JSON.parse(connection.request.getBody());
            };
            let peselExists = function (pesel) {
                let cachedList = getClientsCache();
                let exists = false;
                for (let i = 0; i < cachedList.length; i++) {
                    if (cachedList[i].pesel == pesel) {
                        exists = true;
                        break;
                    }

                }
                return exists;
            };
            setTimeout(() => {

                let currentClient;
                if (connection.request.url.endsWith('/api/clientExists') && connection.request.method === RequestMethod.Get) {
                    let params = getResponseParams();
                    let pesel = params.pesel;
                    let exists = peselExists(pesel);

                    responseSuccess({exists: exists});
                }

                if (connection.request.url.endsWith('/api/login') && connection.request.method === RequestMethod.Post) {
                    let params = getResponseParams();

                    let userValid = testUsers.filter(user => {
                            return params.username === user.username && params.password === user.password;
                        }).length === 1;

                    if (userValid === true) {
                        responseSuccess({access_token: sessionKey});
                    } else {
                        responseFailure();
                    }
                }

                if (connection.request.url.match('/api/users') && connection.request.method === RequestMethod.Get) {
                    if (isAuthorized()) {
                        responseSuccess([testUsers]);
                    } else {
                        responseFailure();
                    }
                }

                // Get clients list
                if (connection.request.url.endsWith('/api/clients') && connection.request.method === RequestMethod.Get) {
                    let clients = getClientsCache();

                    for (let client of clients) {
                        client.policiesCount = getClientPoliciesCount(client.id);
                    }

                    if (isAuthorized()) {
                        responseSuccess(clients);
                    } else {
                        responseFailure();
                    }
                }

                // Delete client
                if (connection.request.url.endsWith('/api/clients') && connection.request.method === RequestMethod.Delete) {
                    let params = getResponseParams();
                    let cachedList = getClientsCache();
                    let index = getClientIndex(params.id);
                    let exists = false;

                    if (index != null) {
                        cachedList.splice(index, 1);
                        exists = true;
                    }

                    cookieService.putObject('clientsListCache', cachedList);

                    if (isAuthorized()) {
                        responseSuccess({exists: exists});
                    } else {
                        responseFailure();
                    }
                }

                // Create Client
                if (connection.request.url.endsWith('/api/clients') && connection.request.method === RequestMethod.Post) {
                    let params = getResponseParams();
                    let cachedList = getClientsCache();
                    let client = params.body.client;
                    let newId = generateNewId(cachedList);

                    cachedList.push({
                        id: newId,
                        name: client.name,
                        surname: client.surname,
                        pesel: client.pesel,
                        birthDate: client.birthDate,
                        policiesCount: client.policiesCount
                    });
                    cookieService.putObject('clientsListCache', cachedList);

                    if (isAuthorized()) {
                        responseSuccess({});
                    } else {
                        responseFailure();
                    }
                }

                // Show Client
                if (connection.request.url.match(/^\/api\/clients\/[0-9]+$/) && connection.request.method === RequestMethod.Get) {
                    let params = getResponseParams();
                    let currentClient = getClient(params.id);

                    if (isAuthorized()) {
                        responseSuccess(currentClient);
                    } else {
                        responseFailure();
                    }
                }

                // Update client
                if (connection.request.url.match(/^\/api\/clients\/[0-9]+$/) && connection.request.method === RequestMethod.Patch) {
                    let params = getResponseParams();
                    let cachedList = getClientsCache();
                    let client = params.body.client;

                    let i;
                    for (i = 0; i < cachedList.length; i++) {
                        if (cachedList[i].id == client.id) {
                            break;
                        }
                    }

                    if (client.hasOwnProperty('id')) {
                        delete client.id;
                    }

                    cachedList[i] = Object.assign(cachedList[i], client);

                    cookieService.putObject('clientsListCache', cachedList);
                    currentClient = cachedList[params.index];
                    if (isAuthorized()) {
                        responseSuccess(currentClient);
                    } else {
                        responseFailure();
                    }
                }

                // Get Client's policies
                if (connection.request.url.match(/^\/api\/clients\/[0-9]+\/policies$/) && connection.request.method === RequestMethod.Get) {
                    let params = getResponseParams();
                    let clientId = params.id;
                    let clientsPolicies = getClientPolicies(clientId);

                    if (isAuthorized()) {
                        responseSuccess(clientsPolicies);
                    } else {
                        responseFailure();
                    }
                }

                // Get policies list
                if (connection.request.url.endsWith('/api/policies') && connection.request.method === RequestMethod.Get) {
                    if (isAuthorized()) {
                        responseSuccess(getPoliciesCache());
                    } else {
                        responseFailure();
                    }
                }

                // Create Policy
                if (connection.request.url.endsWith('/api/policies') && connection.request.method === RequestMethod.Post) {
                    let params = getResponseParams();
                    let cachedList = getPoliciesCache();
                    let policyData = params.body.policy;
                    let clientData = params.body.client;
                    let newId = generateNewId(cachedList);

                    policyData.signedAt = new Date(Date.now()).toLocaleString().slice(0, 10).replace(/\./g, "-");

                    let policy = {
                        id: newId,
                        clientId: policyData.clientId,
                        propertyId: policyData.propertyId,
                        value: policyData.value,
                        monthlyCost: policyData.monthlyCost,
                        startedAt: policyData.startedAt,
                        endedAt: policyData.endedAt,
                        signedAt: policyData.signedAt,
                        calculationType: policyData.calculationType,
                        additionalInformation: policyData.additionalInformation,
                        property: policyData.propertyName,
                        propertyAdditionalInformation: '',
                        name: clientData.name,
                        surname: clientData.surname
                    };

                    cachedList.push(policy);
                    cookieService.putObject('policiesListCache', cachedList);

                    if (isAuthorized()) {
                        responseSuccess({});
                    } else {
                        responseFailure();
                    }
                }

                // Show Policy
                if (connection.request.url.match(/^\/api\/policies\/[0-9]+$/) && connection.request.method === RequestMethod.Get) {
                    let params = getResponseParams();
                    let currentPolicy = getPolicy(params.id);

                    if (isAuthorized()) {
                        responseSuccess(currentPolicy);
                    } else {
                        responseFailure();
                    }
                }

                // Delete Policy
                if (connection.request.url.endsWith('/api/policies') && connection.request.method === RequestMethod.Delete) {
                    let params = getResponseParams();
                    let cachedList = getPoliciesCache();
                    let policyIndex = getPolicyIndex(params.id);

                    if (isAuthorized() && policyIndex !== null) {

                        cachedList.splice(policyIndex, 1);
                        cookieService.putObject('policiesListCache', cachedList);

                        responseSuccess(cachedList);
                    } else {
                        responseFailure();
                    }
                }

                // PROPERTIES

                // Get Client's properties
                if (connection.request.url.match(/^\/api\/clients\/[0-9]+\/properties$/) && connection.request.method === RequestMethod.Get) {
                    let params = getResponseParams();
                    let cachedList = getPropertiesCache();
                    let clientProperties = cachedList.filter(item => item.clientId === params.id);

                    if (isAuthorized()) {
                        responseSuccess(clientProperties);
                    } else {
                        responseFailure();
                    }
                }

                // Get properties list
                if (connection.request.url.endsWith('/api/properties') && connection.request.method === RequestMethod.Get) {
                    if (isAuthorized()) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({status: 200, body: getPropertiesCache()})
                        ));
                    } else {
                        responseFailure();
                    }
                }

                // Create Property
                if (connection.request.url.endsWith('/api/properties') && connection.request.method === RequestMethod.Post) {
                    let params = getResponseParams();
                    let cachedList = getPropertiesCache();
                    let propertyData = params.body.property;
                    let newId = generateNewId(cachedList);

                    let property = {
                        id: newId,
                        clientId: propertyData.clientId,
                        name: propertyData.name,
                        value: propertyData.value,
                        propertyAdditionalInformation: propertyData.propertyAdditionalInformation
                    };

                    cachedList.push(property);
                    cookieService.putObject('propertiesListCache', cachedList);

                    if (isAuthorized()) {
                        responseSuccess({});
                    } else {
                        responseFailure();
                    }
                }

                // Show Property
                if (connection.request.url.match(/^\/api\/properties\/[0-9]+$/) && connection.request.method === RequestMethod.Get) {
                    let params = getResponseParams();
                    let property = getProperty(params.id);

                    if (isAuthorized()) {
                        responseSuccess(property);
                    } else {
                        responseFailure();
                    }
                }

                // Delete Property
                if (connection.request.url.endsWith('/api/properties') && connection.request.method === RequestMethod.Delete) {
                    let params = getResponseParams();
                    let cachedList = getPropertiesCache();
                    let propertyId = getPropertyIndex(params.id);

                    if (isAuthorized() && propertyId !== null) {
                        cachedList.splice(propertyId, 1);
                        cookieService.putObject('propertiesListCache', cachedList);

                        responseSuccess(cachedList);
                    } else {
                        responseFailure();
                    }
                }

                if (connection.request.url.endsWith('/api/properties/haspolicy') && connection.request.method === RequestMethod.Get) {
                    let params = getResponseParams();
                    let cachedList = getPoliciesCache();
                    let propertyId = params.id;

                    if (isAuthorized() && propertyId !== null) {
                        let result = false;
                        for (let policy of cachedList) {
                            if (policy.propertyId === propertyId) {
                                result = true;
                                break;
                            }
                        }

                        responseSuccess(result);
                    } else {
                        responseFailure();
                    }
                }
            }, 500);

        });

        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions, CookieService]
};