import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when prefix not empty`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('teste');
    expect(id.startsWith('teste-')).toBeTrue();
  });
});
