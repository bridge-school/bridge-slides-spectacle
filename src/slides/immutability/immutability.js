import React from 'react';
import {BasicSlideMaker} from '../../tools';

export const ImmutabilityOverviewSlide = BasicSlideMaker(
  'Immutability',
  'Working in an immutable way means to never -modify- an object, but rather make a new copy of an object with changes',
  'This is valuable for writing pure and predictable functions',
  'This is valuable for writing tests and having easily debugged code',
  'This is valuable for \'state management\' - ie, keeping ontop of what your apps data is, what changed it, and when'
);
