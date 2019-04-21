import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaactualComponent } from './fechaactual.component';

describe('FechaactualComponent', () => {
  let component: FechaactualComponent;
  let fixture: ComponentFixture<FechaactualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaactualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaactualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
