import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseEditorComponent } from './enterprise-editor.component';

describe('EnterpriseEditorComponent', () => {
  let component: EnterpriseEditorComponent;
  let fixture: ComponentFixture<EnterpriseEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
