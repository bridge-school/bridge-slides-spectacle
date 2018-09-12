import { BasicCodeSlideMaker } from '../../tools';

const codeExamples = {
  testingStructure: require('!raw-loader!./testing-structure.example'),
  basicAssertionFns: require('!raw-loader!./basic-assertions.example'),
  booleanAssertionFns: require('!raw-loader!./boolean-assertions.example'),
  numberAssetionFns: require('!raw-loader!./number-assertions.example'),
  components: require('!raw-loader!./date-component.example'),
};

const Slide1 = BasicCodeSlideMaker(codeExamples.testingStructure, 16, 'Testing Structure');

const Slide2 = BasicCodeSlideMaker(codeExamples.basicAssertionFns, 16, 'Basic Assertion Functions');

const Slide3 = BasicCodeSlideMaker(codeExamples.booleanAssertionFns, 16, 'Boolean Assertions');

const Slide4 = BasicCodeSlideMaker(codeExamples.numberAssetionFns, 16, 'Number Assertions');

const Slide5 = BasicCodeSlideMaker(codeExamples.components, 16, 'Components');

export const unitTestingSet = [Slide1, Slide2, Slide3, Slide4, Slide5];
