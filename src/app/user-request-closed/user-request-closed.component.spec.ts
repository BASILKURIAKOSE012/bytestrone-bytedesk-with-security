import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../service/data.service';

import { UserRequestClosedComponent } from './user-request-closed.component';

xdescribe('UserRequestClosedComponent', () => {
  let component: UserRequestClosedComponent;
  let fixture: ComponentFixture<UserRequestClosedComponent>;
  let service: DataService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRequestClosedComponent ],
      providers:[DataService],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRequestClosedComponent);
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
