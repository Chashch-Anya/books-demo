import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
    },

    actions: {
        async deletespeaker(speaker) {
            this.destroyspeaker(speaker);
        }
    }
});
