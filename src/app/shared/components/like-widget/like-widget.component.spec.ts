import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe(`${LikeWidgetComponent.name}`, () => {
  let fixture: ComponentFixture<LikeWidgetComponent>;
  let component: LikeWidgetComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate id on ngOnInit when (@Input id) is NOT assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto-generate id on ngOnInit when (@Input id) is assigned', () => {
    const testId = 'test';

    component.id = testId;
    fixture.detectChanges();

    expect(component.id).toBe(testId);
  });

  it(`#${LikeWidgetComponent.prototype.emitLiked.name} should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit');
    component.emitLiked();

    expect(component.liked.emit).toHaveBeenCalled();
  });
});
