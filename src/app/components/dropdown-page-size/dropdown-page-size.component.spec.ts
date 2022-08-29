import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownPageSizeComponent } from './dropdown-page-size.component';

describe('DropdownPageSizeComponent', () => {
  let component: DropdownPageSizeComponent;
  let fixture: ComponentFixture<DropdownPageSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownPageSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownPageSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
