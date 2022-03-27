import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSintomasComponent } from './lista-sintomas.component';

describe('ListaSintomasComponent', () => {
  let component: ListaSintomasComponent;
  let fixture: ComponentFixture<ListaSintomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSintomasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSintomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
