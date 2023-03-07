import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Info } from '../model/info';
import { Requestmodel } from '../model/requestmodel';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let http:HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[DataService]
    });
    service = TestBed.inject(DataService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(()=>{
    httpController.verify();
  })
  it('service created', () => {
    expect(service).toBeDefined();
  });

  // to test the open request users
  it('get user open requests',()=>{
    const testData:Requestmodel={
        requestId: '',
        requestedDate: '',
        resolvedDate: '',
        employeeId: '',
        employeeName: '',
        ticketSummary: '',
        ticketDescription: '',
        ticketStatus: '',
        department: '',
        totalItems: 0,
        userRequests: [],
        info: ''
    }
const page=0;
const adminDepartment="IT";
    service.getUserOpenrequests(page,adminDepartment).subscribe((data:Requestmodel)=>expect(data).toEqual(testData));
    const req =httpController.expectOne(`http://localhost:8080/api/requests/${page}/10/${adminDepartment}/${"Requested"}`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    expect(service).toBeDefined();

  })



// to test the resolved request users

it('get user resolve requests',()=>{
    const testData:Requestmodel={
        requestId: '',
        requestedDate: '',
        resolvedDate: '',
        employeeId: '',
        employeeName: '',
        ticketSummary: '',
        ticketDescription: '',
        ticketStatus: '',
        department: '',
        totalItems: 0,
        userRequests: [],
        info: ''
    }
const page=0;
const adminDepartment="IT";
    service.getUserResolveRequests(page,adminDepartment).subscribe((data:Requestmodel)=>expect(data).toEqual(testData));
    const req =httpController.expectOne(`http://localhost:8080/api/requests/${page}/10/${adminDepartment}/${"Resolved"}`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    expect(service).toBeDefined();

  })

// to test the closed request users

it('get user close requests',()=>{
    const testData:Requestmodel={
        requestId: '',
        requestedDate: '',
        resolvedDate: '',
        employeeId: '',
        employeeName: '',
        ticketSummary: '',
        ticketDescription: '',
        ticketStatus: '',
        department: '',
        totalItems: 0,
        userRequests: [],
        info: ''
    }
const page=0;
const adminDepartment="IT";
    service.getUserCloseRequests(page,adminDepartment).subscribe((data:Requestmodel)=>expect(data).toEqual(testData));
    const req =httpController.expectOne(`http://localhost:8080/api/requests/${page}/10/${adminDepartment}/${"Closed"}`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    expect(service).toBeDefined();

  })
// to test to resolve the user request

it('put the resolve',()=>{
    const testData:Requestmodel={
        requestId: '',
        requestedDate: '',
        resolvedDate: '',
        employeeId: '',
        employeeName: '',
        ticketSummary: '',
        ticketDescription: '',
        ticketStatus: 'Resolved',
        department: '',
        totalItems: 0,
        userRequests: [],
        info: ''
    }
    const id='TID1000';
    const inputData:Requestmodel={
        requestId: '',
        requestedDate: '',
        resolvedDate: '',
        employeeId: '',
        employeeName: '',
        ticketSummary: '',
        ticketDescription: '',
        ticketStatus: 'Requested',
        department: '',
        totalItems: 0,
        userRequests: [],
        info: ''
    }
    service.resolveUserRequest(id,inputData).subscribe((data:Requestmodel)=>expect(data).toEqual(testData));
    const req =httpController.expectOne(`http://localhost:8080/api/resolve/${id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(testData);

    expect(service).toBeDefined();
})

/// to test to reassign user request
it('put the reassign',()=>{
    const testData:Requestmodel={
        requestId: '',
        requestedDate: '',
        resolvedDate: '',
        employeeId: '',
        employeeName: '',
        ticketSummary: '',
        ticketDescription: '',
        ticketStatus: 'Resolved',
        department: '',
        totalItems: 0,
        userRequests: [],
        info: ''
    }
    const id='TID1000';
    const inputData:Requestmodel={
        requestId: '',
        requestedDate: '',
        resolvedDate: '',
        employeeId: '',
        employeeName: '',
        ticketSummary: '',
        ticketDescription: '',
        ticketStatus: 'Requested',
        department: '',
        totalItems: 0,
        userRequests: [],
        info: ''
    }
    service.reassignUserRequest(id,inputData).subscribe((data:Requestmodel)=>expect(data).toEqual(testData));
    const req =httpController.expectOne(`http://localhost:8080/api/reassign/${id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(testData);

    expect(service).toBeDefined();
})

// to save the reassigned data
it('test to save reassign data',()=>{
    const inputData:Info={
        adminInfo: '',
        userInfo: '',
        requestId: ''
    }
    const testData:Info={
        adminInfo: '',
        userInfo: '',
        requestId: ''
    }
    service.saveReassignedData(inputData).subscribe((data:Info)=>expect(data).toEqual(testData));
    const req = httpController.expectOne(`http://localhost:8080/api/inforequest`)
    expect(req.request.method).toEqual('POST');
    req.flush(testData);

    expect(service).toBeDefined();
})
// to get the reassigned data
it('test to get reassign data',()=>{
   const id ="TID1000"
    const testData:Info[]=[]
    service.getReassignedData(id).subscribe((data:Info[])=>expect(data).toEqual(testData));
    const req = httpController.expectOne(`http://localhost:8080/api/reassigned/${id}`)
    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    expect(service).toBeDefined();
})
// to test the open request data

it('test the open data',()=>{
    const inputData:Requestmodel={
        requestId: '',
        requestedDate: '',
        resolvedDate: '',
        employeeId: '',
        employeeName: '',
        ticketSummary: '',
        ticketDescription: '',
        ticketStatus: '',
        department: '',
        totalItems: 0,
        userRequests: [],
        info: ''
    }
    const testData:Requestmodel={
        requestId: '',
        requestedDate: '',
        resolvedDate: '',
        employeeId: '',
        employeeName: '',
        ticketSummary: '',
        ticketDescription: '',
        ticketStatus: '',
        department: '',
        totalItems: 0,
        userRequests: [],
        info: ''
    }
    service.requestedData(inputData);
    expect(inputData).toEqual(testData);
})

// to test the close data
it('test the close data',()=>{
    const inputData:Requestmodel={
        requestId: '',
        requestedDate: '',
        resolvedDate: '',
        employeeId: '',
        employeeName: '',
        ticketSummary: '',
        ticketDescription: '',
        ticketStatus: '',
        department: '',
        totalItems: 0,
        userRequests: [],
        info: ''
    }
    const testData:Requestmodel={
        requestId: '',
        requestedDate: '',
        resolvedDate: '',
        employeeId: '',
        employeeName: '',
        ticketSummary: '',
        ticketDescription: '',
        ticketStatus: '',
        department: '',
        totalItems: 0,
        userRequests: [],
        info: ''
    }
    service.closedData(inputData);
    expect(inputData).toEqual(testData);
})

// to test the resolved data

it('test the resolved data',()=>{
    const inputData:Requestmodel={
        requestId: '',
        requestedDate: '',
        resolvedDate: '',
        employeeId: '',
        employeeName: '',
        ticketSummary: '',
        ticketDescription: '',
        ticketStatus: '',
        department: '',
        totalItems: 0,
        userRequests: [],
        info: ''
    }
    const testData:Requestmodel={
        requestId: '',
        requestedDate: '',
        resolvedDate: '',
        employeeId: '',
        employeeName: '',
        ticketSummary: '',
        ticketDescription: '',
        ticketStatus: '',
        department: '',
        totalItems: 0,
        userRequests: [],
        info: ''
    }
    service.resolvedData(inputData);
    expect(inputData).toEqual(testData);
})

});
