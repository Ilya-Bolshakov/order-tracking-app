import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateComponentComponent } from './navigate-component.component';

describe('NavigateComponentComponent', () => {
  let component: NavigateComponentComponent;
  let fixture: ComponentFixture<NavigateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
