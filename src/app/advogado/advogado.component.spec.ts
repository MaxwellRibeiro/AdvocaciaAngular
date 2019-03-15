import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvogadoComponent } from './advogado.component';

describe('AdvogadoComponent', () => {
  let component: AdvogadoComponent;
  let fixture: ComponentFixture<AdvogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
