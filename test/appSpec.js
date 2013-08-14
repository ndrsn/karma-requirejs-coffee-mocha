define(['app', 'chai', 'jquery', 'underscore'], function(App, chai, $, _) {

	var should = chai.should();

	describe('just checking', function() {
		it('works for app', function() {
			var el = $('<div></div>');

			var app = new App(el);
			app.render();

			el.text().should.equal('require.js up and running');
		});

		it('works for underscore', function() {
			// just checking that _ works
			_.size([1,2,3]).should.equal(3);
		});

	});

});
