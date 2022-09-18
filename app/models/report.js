import DS from 'ember-data';

export default DS.Model.extend({
    reportDate: DS.attr('string'),
    bookMark: DS.attr('number'),
    presentation: DS.attr('string'),
    video: DS.attr('string'),
    review: DS.attr('string'),

    speaker: DS.belongsTo('speaker'),
    book: DS.belongsTo('book'),
    meeting: DS.belongsTo('meeting')
});