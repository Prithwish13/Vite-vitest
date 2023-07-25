import { describe, it, assert } from 'vitest';
import { isValidEmail } from './helper';

describe('Valid email addresses', () => {
  it('should return true for user@example.com', () => {
    assert(isValidEmail('user@example.com') === true);
  });

  it('should return true for john.doe@example.co.uk', () => {
    assert(isValidEmail('john.doe@example.co.uk') === true);
  });

  it('should return true for john+spam@example.com', () => {
    assert(isValidEmail('john+spam@example.com') === true);
  });
});

describe('Invalid email addresses', () => {
  it('should return false for invalid-email', () => {
    assert(isValidEmail('invalid-email') === false);
  });

  it('should return false for test@example', () => {
    assert(isValidEmail('test@example') === false);
  });

  it('should return false for @example.com', () => {
    assert(isValidEmail('@example.com') === false);
  });
});
