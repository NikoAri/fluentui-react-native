import { IFontFamilies, IFontSizes, IFontWeights, IVariants, ITypography } from './Typography.types';
import { resolveFontFamily, resolveFontSize, resolveFontWeight } from './Typography';

const families = {
  primary: 'Verdana',
  monospace: 'Courier New'
} as IFontFamilies;

const sizes = {
  caption: 8,
  subheader: 16
} as IFontSizes;

const weights = {
  regular: '500',
  semiBold: '700'
} as IFontWeights;

const variants = {
  captionStandard: {
    face: 'Verdana',
    size: 8,
    weight: '500'
  },
  subheaderStandard: {
    face: 'Verdana',
    size: 16,
    weight: '500'
  },
  subheaderSemibold: {
    face: 'Verdana',
    size: 16,
    weight: '700'
  }
} as IVariants;

const typography: ITypography = {
  families,
  sizes,
  weights,
  variants
};

describe('Typography tests', () => {
  test('resolveFontFamily "monospace" returns "Courier New"', () => {
    expect(resolveFontFamily(typography, 'monospace')).toBe('Courier New');
  });

  test('resolveFontFamily "Arial" returns "Arial"', () => {
    expect(resolveFontFamily(typography, 'Arial')).toBe('Arial');
  });

  test('resolveFontSize "caption" returns 8', () => {
    expect(resolveFontSize(typography, 'caption')).toBe(8);
  });

  test('resolveFontSize 15 returns 15', () => {
    expect(resolveFontSize(typography, 15)).toBe(15);
  });

  test('resolveFontSize "semiBold" returns 700', () => {
    expect(resolveFontWeight(typography, 'semiBold')).toBe('700');
  });

  test('resolveFontSize 200 returns 200', () => {
    expect(resolveFontWeight(typography, '200')).toBe('200');
  });
});
