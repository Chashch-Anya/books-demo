import Component from '@ember/component';

export default Component.extend({
    actions:{
        sumbitForm(e){
            e.preventDefault();
            this.onsumbit(this.get('book'));
        }
    }
});
