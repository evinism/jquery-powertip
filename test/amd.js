require.config({
	paths: {
		jquery: 'http://code.jquery.com/jquery-1.12.2',
		qunit: 'http://code.jquery.com/qunit/qunit-1.23.0',
		'jquery.powertip': '../dist/jquery.powertip'
	}
});

require([ 'jquery', 'qunit', 'jquery.powertip' ], function($, QUnit, powerTip) {
	'use strict';

	QUnit.start();

	QUnit.module('AMD');

	QUnit.test('powerTip is loaded and available via AMD', function(assert) {
		var element = $('<a href="#" title="This is the tooltip text"></a>');
		assert.strictEqual(typeof element.powerTip, 'function', 'powerTip is defined');
	});

	QUnit.test('expose API via jQuery', function(assert) {
		assert.strictEqual(typeof $.powerTip.show, 'function', 'show is defined');
		assert.strictEqual(typeof $.powerTip.reposition, 'function', 'reposition is defined');
		assert.strictEqual(typeof $.powerTip.hide, 'function', 'hide is defined');
		assert.strictEqual(typeof $.powerTip.toggle, 'function', 'toggle is defined');
		assert.strictEqual(typeof $.powerTip.destroy, 'function', 'destroy is defined');
	});

	QUnit.test('expose API via AMD parameter', function(assert) {
		assert.strictEqual(typeof powerTip.show, 'function', 'show is defined');
		assert.strictEqual(typeof powerTip.reposition, 'function', 'reposition is defined');
		assert.strictEqual(typeof powerTip.hide, 'function', 'hide is defined');
		assert.strictEqual(typeof powerTip.toggle, 'function', 'toggle is defined');
		assert.strictEqual(typeof powerTip.destroy, 'function', 'destroy is defined');
	});
});
