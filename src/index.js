import _ from 'lodash';
import metaphone from 'metaphone';
import stringSimilarity from 'string-similarity';

export const getTextPhonetic = _.memoize(text => {
  const phonetic = metaphone(text);
  if (!phonetic || phonetic === '0') {
    return text;
  }
  return phonetic;
});

export function compareTwoTexts(textA, textB) {
  return stringSimilarity.compareTwoStrings(getTextPhonetic(`${textA}`), getTextPhonetic(`${textB}`));
}

export function findBestMatch(textsA, textsB) {
  return textsA.reduce((best, textA) => {
    return textsB.reduce((best, textB) => {
      const rating = compareTwoTexts(textA, textB);
      if (!best.text || best.rating < rating || best.rating === rating && textA.length < best.text.length) {
        return {
          text: textA,
          target: textB,
          rating
        };
      }
      return best;
    }, best);
  }, {
    text: '',
    target: '',
    rating: 0
  });
}
