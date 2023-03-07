import { HttpClientModule } from '@angular/common/http';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../service/data.service';

import { UserRequestResolveComponent } from './user-request-resolve.component';

xdescribe('UserRequestResolveComponent', () => {
  let component: UserRequestResolveComponent;
  let fixture: ComponentFixture<UserRequestResolveComponent>;
  let service:DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRequestResolveComponent ],
      providers:[DataService],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRequestResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('DI unit test case using test bed method',()=>{
    expect(service instanceof(DataService)).toBeTruthy();
   
  });
});
