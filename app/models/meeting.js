import DS from 'ember-data';

export default DS.Model.extend({
  meetDate: DS.attr('date-string'),

  reports: DS.hasMany('report')
});