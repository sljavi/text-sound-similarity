import {
  getTextPhonetic,
  compareTwoTexts,
  findBestMatch } from './../src/index';

describe('getTextPhonetic', () => {
  it('should return right values', () => {
    expect(getTextPhonetic('foo')).to.equal('F');
    expect(getTextPhonetic('My name is Laura')).to.equal('MNMSLR');
    expect(getTextPhonetic('2')).to.equal('2');
    expect(getTextPhonetic('true story')).to.equal('TRSTR');
  });
});

describe('compareTwoTexts', () => {
  it('should return right values', () => {
    expect(compareTwoTexts('equal', 'equal')).to.equal(1);
    expect(compareTwoTexts('foo', 'bar')).to.equal(0);
    expect(compareTwoTexts('lost', 'loose')).to.equal(0.6666666666666666);
    expect(compareTwoTexts('My name is Laura', 'Her name is laura')).to.equal(0.7272727272727273);
  });
});

describe('findBestMatch', () => {
  it('should return always the best match', () => {
    expect(findBestMatch(['foo'], ['bar'])).to.deep.equal({
      text: 'foo',
      target: 'bar',
      rating: 0
    });
  });

  it('should return right values', () => {
    expect(findBestMatch(['equal', 'comma'], ['equal', 'plus', 'dot', 'slash'])).to.deep.equal({
      text: 'equal',
      target: 'equal',
      rating: 1
    });
  });

  it('should prioritize shorter texts', () => {
    expect(findBestMatch(['coma', 'comma'], ['comma'])).to.deep.equal({
      text: 'coma',
      target: 'comma',
      rating: 1
    });
  });

  it('should return right values', () => {
    const matchedQuote = findBestMatch([
      'Love all, trust a few, do wrong to none.',
      'We know what we are, but know not what we may be.',
      'A fool thinks himself to be wise, but a wise man knows himself to be a fool.',
      'When a father gives to his son, both laugh; when a son gives to his father, both cry.'
    ], [
      'It is not in the stars to hold our destiny but in ourselves.',
      'If music be the food of love, play on.',
      'It is a wise father that knows his own child.',
      'There is nothing either good or bad but thinking makes it so.',
      'No legacy is so rich as honesty.',
      'Some are born great, some achieve greatness, and some have greatness thrust upon them.'
    ]);

    expect(matchedQuote).to.deep.equal({
      text: 'Love all, trust a few, do wrong to none.',
      target: 'It is not in the stars to hold our destiny but in ourselves.',
      rating: 0.34146341463414637
    });
  });
});
