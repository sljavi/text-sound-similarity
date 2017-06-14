# Text sound similarity

Finds degree of similarity between text's phonetics, based on [Metaphone](https://en.wikipedia.org/wiki/Metaphone) and [Dice's Coefficient](https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient) algorithms.

## Install

```
npm install text-sound-similarity
```

## Usage

```javascript
import { compareTwoTexts } from 'text-sound-similarity';

compareTwoTexts('lost', 'loose'); // 0.6666666666666666
```

## API

Requiring the module gives an object with three methods:

### getTextPhonetic(text)

Returns the string's phonetic got via [metaphone](https://en.wikipedia.org/wiki/Metaphone) algorithm.

##### Arguments

`text (string)`: The text you want to get as a Metaphone code.


##### Returns

`(string)`: Metaphone code of the given word

##### Examples

```javascript
import { getTextPhonetic } from 'text-sound-similarity';

getTextPhonetic('My name is Laura'); //MNMSLR
```

### compareTwoTexts(text1, text2)

Returns a fraction between 0 and 1, which indicates the degree of similarity between phonemes of the two strings. 0 indicates completely different strings, 1 indicates identical strings

##### Arguments

`text1 (string)`: The first text
`text2 (string)`: The second text

Order does not make a difference.

##### Returns

`(number)`: A fraction from 0 to 1, both inclusive. Higher number indicates more similarity.

##### Examples

```javascript
import { compareTwoTexts } from 'text-sound-similarity';

compareTwoTexts('My name is Laura', 'Her name is laura'); //0.7272727272727273
```

### findBestMatch(mainTexts, targetTexts)

Compares each string in `mainTexts` against each string in `targetTexts` and returns the most similar pair.

##### Arguments

`mainTexts (Array<string>)`: The string list to match each target string against.
`targetTexts (Array<string>)`: Each string in this array will be matched against each string in `mainTexts`.

##### Returns
`(Object)`: An object with the following properties:
 * `text`: Best match main string
 * `target`: Best match target string
 * `rating`: Similarity rating of them

##### Examples
```javascript
import { findBestMatch } from 'text-sound-similarity';

findBestMatch([
  'Love all, trust a few, do wrong to none.',
  'When a father gives to his son, both laugh; when a son gives to his father, both cry.'
], [
  'It is not in the stars to hold our destiny but in ourselves.',
  'No legacy is so rich as honesty.',
  'Some are born great, some achieve greatness, and some have greatness thrust upon them.'
]);
/*
  Returns:
  {
      text: 'Love all, trust a few, do wrong to none.',
      target: 'It is not in the stars to hold our destiny but in ourselves.',
      rating: 0.34146341463414637
    }
*/
```
