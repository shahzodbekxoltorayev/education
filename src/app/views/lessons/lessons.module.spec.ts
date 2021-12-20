import { LessonsModule } from './lessons.module';

describe('StaffModule', () => {
  let lessonsModule: LessonsModule;

  beforeEach(() => {
    lessonsModule = new LessonsModule();
  });

  it('should create an instance', () => {
    expect(lessonsModule).toBeTruthy();
  });
});
