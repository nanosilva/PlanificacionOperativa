import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestEvolMontoComponent } from './prest-evol-monto.component';

describe('PrestEvolMontoComponent', () => {
  let component: PrestEvolMontoComponent;
  let fixture: ComponentFixture<PrestEvolMontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestEvolMontoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestEvolMontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
