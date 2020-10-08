import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YkToolsComponent } from './yk-tools.component';

describe('YkToolsComponent', () => {
  let component: YkToolsComponent;
  let fixture: ComponentFixture<YkToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YkToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YkToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
