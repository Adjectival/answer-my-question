import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Art thou sure?')) {
        this.sendAction('delete', question);
      }
    }
  }
});