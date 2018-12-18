import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrepageComponent } from './genrepage.component';

describe('GenrepageComponent', () => {
  let component: GenrepageComponent;
  let fixture: ComponentFixture<GenrepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenrepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenrepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
