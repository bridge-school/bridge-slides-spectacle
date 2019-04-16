import * as basicPromiseFormat from '!raw-loader!./basic-promise-format.example';
import * as callbackHellExample from '!raw-loader!./callback-hell.example';
import * as callbackHellExampleConverted from '!raw-loader!./callback-hell-converted.example';
import * as callbackHellExampleConverted2 from '!raw-loader!./callback-hell-converted-2.example';
import * as usingPromiseCode from '!raw-loader!./using-a-promise.example';
import * as makingPromiseCode from '!raw-loader!./making-a-promise.example';
import promiseIllustration from './promises.png';
import { BasicCodeSlideMaker, ListSlideMaker, ReplClassSignup, ReplFrameSlide, IllustrationSlide } from '../../tools';

const whatIsAPromiseGoodFor = ListSlideMaker(
  'Promises: what are they good for?',
  [
    'Promises are one of a handful of ways to deal with asynchronous behaviour',
    'Are an easier way of executing and coordinating multiple async requests',
    'Supported as of the ES6 standard and in all major browsers, other than IE11',
    'Great way to avoid callback hell',
  ],
  [
    'Review synchronous vs. asynchronous: synchronous - each task completes before moving one, async - move on before the task completes. Review: an example of asynchronous event is fetching data from web service',
    'Why do we care? Avoid pyramids of doom. Handling one request is simple, but coordinating multiple is challenging',
    'Promise libraries such as Q, when.js, RSVP authored as early as 2011, now available in most browsers (and polyfills for others)',
  ],
);

const whatIsAPromise = ListSlideMaker(
  'Promises are placeholders',
  [
    'A Promise is a placeholder for data that may be available in the future',
    'When a Promise is created it runs automatically and has a pending status',
    'A Promise either resolves with data (fulfilled), or rejects with a reason (rejected)',
    'Access resolved values from promises with .then() and catch errors with .catch()',
  ],
  [
    "Challenge: be able to define these keywords by the end of class, 'pending, settled, fulfilled, rejected'",
    'Draw diagram then relate to code example on next slide: a Promise is a bucket on a maple tree. You request sap and get an empty bucket while you wait. Empty bucket = pending, spout = .then(success, fail), filled bucket = fulfilled and success is triggered, tree burns down = rejected and fail is triggered',
    'Draw flow chart: When a promise is pending, it can transition to the fulfilled or rejected. Once settled it cannot transition to another state and its value cannot change',
  ],
);

// const promiseIllustration = class PromiseIllustration extends React.component {};

const writeAPromise = ListSlideMaker(
  'Writing a Promise',
  [
    'A new Promise takes callback function (that is fired as soon as the Promise is created)',
    "The callback takes to parameters, 'resolve' and 'reject', within the function body resolve with data or reject with reason",
    'Add a .then method to register callbacks to be fired when the Promise is fulfilled or rejected',
  ],
  ['Live code (Repl)'],
);

const replLink = ReplClassSignup('Promises', 'https://repl.it/classroom/invite/V7RIbIS');

const promiseResolveRepl = ReplFrameSlide(
  'https://repl.it/student_embed/assignment/1129030/74479d935c296f8f9705a22acf29dd86',
);

const promiseRejectRepl = ReplFrameSlide(
  'https://repl.it/student_embed/assignment/1129032/5bf5309bdb323ced41ec1f28a148411f',
);

const chainingPromises = ListSlideMaker(
  'Promise chaining',
  [
    'Any number of callbacks can be registered with .then',
    'Operations to be chained together are guaranteed to happen that order',
    'Values including Promises can be returned from the success callback',
    'Can use .catch to handle errors (similar to try/catch)',
  ],
  [
    '(Example on next slide)',
    'Chaining is a key advantage of Promises over callbacks',
    'The next .then will not be called until the previous one settles',
    'To handle any kind of exception it is good practice to add .catch',
  ],
);

const chainingRepl = ReplFrameSlide(
  'https://repl.it/student_embed/assignment/1129363/0cbafc25aa4f659c9385fe14d3525706',
);

export const PromisesSlideSet = [
  whatIsAPromiseGoodFor,
  BasicCodeSlideMaker(callbackHellExample, 18),
  whatIsAPromise,
  BasicCodeSlideMaker(usingPromiseCode),
  writeAPromise,
  BasicCodeSlideMaker(basicPromiseFormat),
  BasicCodeSlideMaker(makingPromiseCode),
  IllustrationSlide(promiseIllustration),
  chainingPromises,
  BasicCodeSlideMaker(callbackHellExample, 18),
  BasicCodeSlideMaker(callbackHellExampleConverted),
  BasicCodeSlideMaker(callbackHellExampleConverted2),
  replLink,
  promiseResolveRepl,
  promiseRejectRepl,
  chainingRepl,
];
