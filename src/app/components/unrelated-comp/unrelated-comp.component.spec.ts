import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrelatedCompComponent } from './unrelated-comp.component';

describe('UnrelatedCompComponent', () => {
  let component: UnrelatedCompComponent;
  let fixture: ComponentFixture<UnrelatedCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnrelatedCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnrelatedCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
