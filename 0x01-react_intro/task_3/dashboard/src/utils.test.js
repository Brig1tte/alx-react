import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', function() => {
  test('returns the correct year', function() => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe('getFooterCopy', function() => {
  test('returns the correct string when the argument is true', function() => {
    const expectedString = 'Holberton School - Copyright 2022 - All Rights Reserved';
    expect(getFooterCopy(true)).toBe(expectedString);
  });

  test('returns the correct string when the argument is false', function() => {
    const expectedString = 'Holberton School main dashboard';
    expect(getFooterCopy(false)).toBe(expectedString);
  });
});

describe('getLatestNotification', function() => {
  test('returns the correct string', function() => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
  });
});
