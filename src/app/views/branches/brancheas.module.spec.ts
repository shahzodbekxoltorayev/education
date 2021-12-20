import { BranchesModule } from './branches.module';

describe('StaffModule', () => {
  let branchesModule: BranchesModule;

  beforeEach(() => {
    branchesModule = new BranchesModule();
  });

  it('should create an instance', () => {
    expect(branchesModule).toBeTruthy();
  });
});
