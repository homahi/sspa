import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TopComponent } from './top.component';

describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('move to problem page', () => {
    // routingのテストを描きたかったけど分からず。
    // const compiled = fixture.debugElement.nativeElement;
    // const btn = fixture.debugElement.query(By.css('.btn'));
    // btn.triggerEventHandler('click', null);

    // expect(location.pathname).toBe('/problem/1');
  });
});
