import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when prefix not empty`, () => {
    const id = service.generateUniqueIdWithPrefix('teste');
    expect(id.startsWith('teste-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate ids when called multiple times`, () => {
    const numberOfCalls = 50;
    const ids = new Set();

    for (let i = 0; i < numberOfCalls; i++) {
      ids.add(service.generateUniqueIdWithPrefix('test'));
    }

    expect(ids.size).toBe(numberOfCalls);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw error when prefix is invalid`, () => {
    const invalidPrefixes = [null, undefined, '', '0'];

    invalidPrefixes.forEach((prefix) => {
      expect(() => service.generateUniqueIdWithPrefix(prefix))
        .withContext(`Test Value: ${prefix}`)
        .toThrowError();
    });
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name} should return number of generated ids when called`, () => {
    const numberOfCalls = 50;

    for (let i = 0; i < numberOfCalls; i++) {
      service.generateUniqueIdWithPrefix('test');
    }

    const numberOfGeneratedIds = service.getNumberOfGeneratedIds();

    expect(numberOfGeneratedIds).toBe(numberOfCalls);
  });
});
