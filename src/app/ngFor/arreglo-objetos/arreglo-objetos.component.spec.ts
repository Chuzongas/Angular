import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArregloObjetosComponent } from './arreglo-objetos.component';

describe('ArregloObjetosComponent', () => {
  let component: ArregloObjetosComponent;
  let fixture: ComponentFixture<ArregloObjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArregloObjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArregloObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
