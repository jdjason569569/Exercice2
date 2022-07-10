import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureComponentComponent } from './secure-component.component';

describe('SecureComponentComponent', () => {
  let component: SecureComponentComponent;
  let fixture: ComponentFixture<SecureComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
