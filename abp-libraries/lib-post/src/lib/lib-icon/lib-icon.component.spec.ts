import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibIconComponent } from './lib-icon.component';

describe('LibIconComponent', () => {
  let component: LibIconComponent;
  let fixture: ComponentFixture<LibIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
