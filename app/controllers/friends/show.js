import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		goback: function(){
			this.transitionToRoute('friends');

			return false;
		},
		edit: function(){
			this.transitionToRoute('friends/edit');

			return false;
		}
	}
});
