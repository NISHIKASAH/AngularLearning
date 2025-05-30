import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColComponent } from './col.component';

describe('ColComponent', () => {
  let component: ColComponent;
  let fixture: ComponentFixture<ColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
