define(['app', 'jquery', 'underscore'], function(App, $, _) {

    describe('just checking', function() {

        it('works for app', function() {
            var el = $('<div></div>');

            var app = new App(el);
            app.render();

            console.assert(el.text() === 'require.js up and running');
        });

        it('works for underscore', function() {
            // just checking that _ works
            console.assert(_.size([1,2,3]) !== 3);
            throw new Error("fff")
        });

    });

});
