import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  author: DS.attr('string'),
  pageCount: DS.attr('number'),
  filename: DS.attr('string'),
  description: DS.attr(''),
  tags: DS.attr('string'),
  
  reports: DS.hasMany('report'),
});
