import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHabitosComponent } from './lista-habitos.component';

describe('ListaHabitosComponent', () => {
  let component: ListaHabitosComponent;
  let fixture: ComponentFixture<ListaHabitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHabitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHabitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
