(function () {
	'use strict';

	describe('"inputConstructor" function', function() {
		it('should make a new input object', function() {
			expect(inputConstructor()).toEqual(jasmine.any(Object));
		});

		it('objects should have correct keys', function() {
			expect(inputConstructor().vals).toEqual(jasmine.any(Array));
			expect(inputConstructor().opps).toEqual(jasmine.any(Array));
		});
	});

	describe('When updating an input objects values', function() {
		var inputOne = inputConstructor();
		describe('"addValToInput function', function() {
			it('should add a BigNumber object to an input objects "vals" property', function() {
				addValToInput(55, inputOne);
				expect(inputOne.vals.length).toEqual(1);
				expect(inputOne.vals[0]).toEqual(jasmine.any(BigNumber));
				expect(inputOne.vals[0].c[0]).toEqual(55);

				addValToInput("55", inputOne);
				expect(inputOne.vals.length).toEqual(2);
				expect(inputOne.vals[1]).toEqual(jasmine.any(BigNumber));
				expect(inputOne.vals[1].c[0]).toEqual(55);
			});
		});

		describe('"remValFromInput" function', function() {
			it('should remove items from the input objects "val" property', function() {
				var removedOne = remValFromInput(1, inputOne);
				expect(removedOne).toEqual(jasmine.any(BigNumber));
				expect(removedOne.c[0]).toEqual(55);
				expect(inputOne.vals.length).toEqual(1);
			});
		});

		describe('"addOpToInput"', function() {
			it('should add a string with the required opperation to an input objects "opps" property', function() {
				addOpToInput("+", inputOne);
				expect(inputOne.opps[0]).toEqual("+");
				expect(inputOne.opps.length).toEqual(1);
				addOpToInput("/", inputOne);
				expect(inputOne.opps[1]).toEqual("/");
				expect(inputOne.opps.length).toEqual(2);
			});
		});

		describe('"removeOpFromInput"', function() {
			it('should remove the desired string from the input objects "opps" property and return that value', function() {
				expect(removeOpFromInput(0, inputOne)).toEqual("+");
				expect(inputOne.opps.length).toEqual(1);
			});
		});
	});

	describe('"currentNumStringBuilder"', function() {
		it('should add input value to new string when given no working string', function() {
			expect(currentNumStringBuilder('1')).toEqual('1');
		});

		it('should add input value to working string when given one', function() {
			expect(currentNumStringBuilder('1', '234')).toEqual('2341');
		});

		it('should add a zero prior to the decimal point when the decimal is the first input', function() {
			expect(currentNumStringBuilder('.')).toEqual('0.1');
		});
	});
})();