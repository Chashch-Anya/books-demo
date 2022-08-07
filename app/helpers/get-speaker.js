import { helper } from '@ember/component/helper';

export function getSpeaker(params/*, hash*/) {
  let [firstName, lastName] = params;
  return `${firstName} ${lastName}`;}

export default helper(getSpeaker);
