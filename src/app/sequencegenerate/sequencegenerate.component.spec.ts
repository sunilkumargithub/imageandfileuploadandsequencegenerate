import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequencegenerateComponent } from './sequencegenerate.component';

describe('SequencegenerateComponent', () => {
  let component: SequencegenerateComponent;
  let fixture: ComponentFixture<SequencegenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequencegenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencegenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
