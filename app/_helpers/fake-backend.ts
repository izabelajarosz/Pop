import {Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {CookieService} from "angular2-cookie/core";

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
                return JSON.parse(cookieService.get('policiesListCache'));
            }

            function putPolicies(policies) {
                cookieService.putObject('policiesListCache', policies);
            }

            function getPolicy (id) {
                let policies = getPoliciesCache();

                for (let policy of policies) {
                    if (policy.id === id) {
                        return policy;
                    }
                }

                return null;
            }

            function getPolicyIndex (id) {
                let policies = getPoliciesCache();

                for (let i=0; i < policies.length; i++) {
                    if (policies[i].id === id) {
                        return i;
                    }
                }

                return null;
            }

            function getProperty (id) {
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

            function putProperties(policies) {
                cookieService.putObject('propertiesListCache', policies);
            }

            function getPropertyIndex (id) {
                let properties = getPropertiesCache();

                for (let i=0; i < properties.length; i++) {
                    if (properties[i].id === id) {
                        return i;
                    }
                }

                return null;
            }

            function getClientsCache() {
                return JSON.parse(cookieService.get('clientsListCache'));
            }

            function putClients(clients) {
                cookieService.putObject('clientsListCache', clients.sort((a, b) => {
                    if (a.id > b.id) {
                        return -1;
                    }

                    if (a.id < b.id) {
                        return 1;
                    }

                    return 0;
                }));
            }

            function getClient (id) {
                let clients = getClientsCache();

                for (let client of clients) {
                    if (client.id === id) {
                        return client;
                    }
                }

                return null;
            }

            function getClientIndex (id) {
                let clients = getClientsCache();

                for (let i=0; i < clients.length; i++) {
                    if (clients[i].id === id) {
                        return i;
                    }
                }

                return null;
            }

            function getClientPoliciesCount (clientId) {
                let cachedPolicies = getPoliciesCache();

                return cachedPolicies.filter(item => item.clientId === clientId).length;
            }

            var generateNewId = function (list) {
                return list.sort((a, b) => {
                        if (a.id > b.id) {
                            return -1;
                        }

                        if (a.id < b.id) {
                            return 1;
                        }

                        return 0;
                    })[0].id + 1;
            };

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

            var failureResponse = function () {
                connection.mockRespond(new Response(
                    new ResponseOptions({status: 401})
                ));
            };
            
            var respondSuccess = function (data) {
                connection.mockRespond(new Response(
                    new ResponseOptions({status: 200, body: data})
                ));
            };

            setTimeout(() => {

                if (connection.request.url.endsWith('/api/clientExists') && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    let pesel = params.pesel;
                    let cachedList = getClientsCache();
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
                        failureResponse();
                    }
                }

                // Get clients list
                if (connection.request.url.endsWith('/api/clients') && connection.request.method === RequestMethod.Get) {

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        let clients = getClientsCache();

                        for (let client of clients) {
                            client.policiesCount = getClientPoliciesCount(client.id);
                        }

                        respondSuccess(clients);
                    } else {
                        failureResponse();
                    }
                }

                // Delete client
                if (connection.request.url.endsWith('/api/clients') && connection.request.method === RequestMethod.Delete) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = getClientsCache();
                    let index = getClientIndex(params.id);
                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey && index != null) {
                        cachedList.splice(index, 1);
                        putClients(cachedList);
                        respondSuccess( {exists: true});
                    } else {
                        failureResponse();
                    }
                }

                // Create Client
                if (connection.request.url.endsWith('/api/clients') && connection.request.method === RequestMethod.Post) {
                    let params = JSON.parse(connection.request.getBody());

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        let cachedList = getClientsCache();
                        let client = params.client;
                        let newId = generateNewId(cachedList);

                        console.log(cachedList);
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
                        });

                        console.log(cachedList);
                        putClients(cachedList);

                        respondSuccess(null);
                    } else {
                        failureResponse();
                    }
                }

                // Show Client
                if (connection.request.url.match(/^\/api\/clients\/[0-9]+$/) && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        let currentClient = getClient(params.id);
                        respondSuccess(currentClient);
                    } else {
                        failureResponse();
                    }
                }

                // Update client
                if (connection.request.url.match(/^\/api\/clients\/[0-9]+$/) && connection.request.method === RequestMethod.Patch) {
                    let params = JSON.parse(connection.request.getBody());

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        let cachedList = getClientsCache();
                        let client = params.body.client;

                        let index = getClientIndex(params.id);

                        cachedList[index] = {
                            id: params.id,
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

                        putClients(cachedList);

                        let currentClient = cachedList[params.index];

                        respondSuccess(currentClient);
                    } else {
                        failureResponse();
                    }
                }

                // Get Client's policies
                if (connection.request.url.match(/^\/api\/clients\/[0-9]+\/policies$/) && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = getPoliciesCache();
                    var clientsPolicies = cachedList.filter(item => item.clientId === params.id);

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        respondSuccess(clientsPolicies);
                    } else {
                        failureResponse();
                    }
                }

                // Get policies list
                if (connection.request.url.endsWith('/api/policies') && connection.request.method === RequestMethod.Get) {
                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        respondSuccess(getPoliciesCache());
                    } else {
                        failureResponse();
                    }
                }

                // Create Policy
                if (connection.request.url.endsWith('/api/policies') && connection.request.method === RequestMethod.Post) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = getPoliciesCache();
                    let policyData = params.body.policy;

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        let newId = generateNewId(cachedList);

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
                        putPolicies(cachedList);

                        respondSuccess(null);
                    } else {
                        failureResponse();
                    }
                }

                // Show Policy
                if (connection.request.url.match(/^\/api\/policies\/[0-9]+$/) && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    var currentPolicy = getPolicy(params.id);

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        respondSuccess(currentPolicy);
                    } else {
                        failureResponse();
                    }
                }

                // Delete Policy
                if (connection.request.url.endsWith('/api/policies') && connection.request.method === RequestMethod.Delete) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = getPoliciesCache();
                    let policyIndex = getPolicyIndex(params.id);

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey && policyIndex !== null) {
                        cachedList.splice(policyIndex, 1);
                        putPolicies(cachedList);
                        respondSuccess(cachedList);
                    } else {
                        failureResponse();
                    }
                }

                // PROPERTIES

                // Get Client's properties
                if (connection.request.url.match(/^\/api\/clients\/[0-9]+\/properties$/) && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = getPropertiesCache();
                    let clientProperties = cachedList.filter(item => item.clientId === params.id);

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        respondSuccess(clientProperties);
                    } else {
                        failureResponse();
                    }
                }

                // Get properties list
                if (connection.request.url.endsWith('/api/properties') && connection.request.method === RequestMethod.Get) {
                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        respondSuccess(getPropertiesCache())
                    } else {
                        failureResponse();
                    }
                }

                // Create Property
                if (connection.request.url.endsWith('/api/properties') && connection.request.method === RequestMethod.Post) {
                    let params = JSON.parse(connection.request.getBody());
                    
                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        let cachedList = getPropertiesCache();
                        let propertyData = params.body.property;
                        let newId = generateNewId(cachedList);

                        var property = {
                            id: newId,
                            clientId: propertyData.clientId,
                            name: propertyData.name,
                            value: propertyData.value,
                        };

                        cachedList.push(property);
                        cookieService.putObject('propertiesListCache', cachedList);

                        respondSuccess(null);
                    } else {
                        failureResponse();
                    }
                }

                // Show Property
                if (connection.request.url.match(/^\/api\/properties\/[0-9]+$/) && connection.request.method === RequestMethod.Get) {
                    let params = JSON.parse(connection.request.getBody());
                    let property = getProperty(params.id);

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey) {
                        respondSuccess(property)
                    } else {
                        failureResponse();
                    }
                }

                // Delete Property
                if (connection.request.url.endsWith('/api/properties') && connection.request.method === RequestMethod.Delete) {
                    let params = JSON.parse(connection.request.getBody());
                    let cachedList = getPropertiesCache();
                    let propertyId = getPropertyIndex(params.id);

                    if (sessionKey != null && connection.request.headers.get('Authorization') === 'Authorization ' + sessionKey && propertyId !== null) {
                        cachedList.splice(propertyId, 1);
                        putProperties(cachedList);
                        respondSuccess(cachedList)
                    } else {
                        failureResponse();
                    }
                }
            }, 500);

        });

        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions, CookieService]
};