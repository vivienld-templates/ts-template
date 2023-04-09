import foo from '../src/index';

describe('foo', () => {
  it('should expose a function', () => {
		expect(foo).toBeDefined();
	});
  
  it('foo should return expected output', () => {
    // const retValue = foo();
    expect(false).toBeTruthy();
  });
});