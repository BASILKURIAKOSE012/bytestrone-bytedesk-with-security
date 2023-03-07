import { HttpClientModule } from '@angular/common/http';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataService } from '../service/data.service';

import { UserRequestResolvedComponent } from './user-request-resolved.component';

xdescribe('UserRequestResolvedComponent', () => {
  let component: UserRequestResolvedComponent;
  let fixture: ComponentFixture<UserRequestResolvedComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRequestResolvedComponent ],
      imports:[HttpClientModule],
      providers:[DataService],

    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRequestResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
    
  });
    it('should create', () => {
    expect(component).toBeTruthy();
  });
it('test',()=>{
  expect("1").toBe("1");
});
});




