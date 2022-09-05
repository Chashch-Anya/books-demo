import DS from 'ember-data';

export default DS.Model.extend({
  meetDate: DS.attr('string'),

  reports: DS.hasMany('report')
});