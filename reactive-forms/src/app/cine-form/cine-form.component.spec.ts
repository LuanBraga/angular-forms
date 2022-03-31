import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineFormComponent } from './cine-form.component';

describe('CineFormComponent', () => {
  let component: CineFormComponent;
  let fixture: ComponentFixture<CineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CineFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
