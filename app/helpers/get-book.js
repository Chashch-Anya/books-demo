import {
  helper
} from '@ember/component/helper';

export function getBook(params /*, hash*/ ) {
  let [name, author] = params;
  return `${name} ${author}`;
}

export default helper(getBook);
