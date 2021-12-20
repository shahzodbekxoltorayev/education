import { PaymentsModule } from './payments.module';

describe('StaffModule', () => {
  let paymentsModule: PaymentsModule;

  beforeEach(() => {
    paymentsModule = new PaymentsModule();
  });

  it('should create an instance', () => {
    expect(paymentsModule).toBeTruthy();
  });
});
