import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departaments } from './departaments';

describe('Departaments', () => {
  let component: Departaments;
  let fixture: ComponentFixture<Departaments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Departaments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Departaments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
