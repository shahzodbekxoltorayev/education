import { StudentsModule } from './staff.module';

describe('StaffModule', () => {
  let staffModule: StudentsModule;

  beforeEach(() => {
    studentsModule = new StudentsModule();
  });

  it('should create an instance', () => {
    expect(studentsModule).toBeTruthy();
  });
});
