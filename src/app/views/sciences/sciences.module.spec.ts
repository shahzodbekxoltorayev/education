import { SciencesModule } from './sciences.module';

describe('StaffModule', () => {
  let sciencesModule: SciencesModule;

  beforeEach(() => {
    sciencesModule = new SciencesModule();
  });

  it('should create an instance', () => {
    expect(sciencesModule).toBeTruthy();
  });
});
