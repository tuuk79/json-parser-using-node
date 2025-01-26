function isValid(json) {
	return !!json;
}

function countProperties(json) {
	if (!isValid(json)) return 0;
	return countPropertiesHelper(json, total = 0)
}

function countPropertiesHelper(json, total) {
	Object.entries(json).forEach(([, value]) => {
		if (typeof value === 'object') {
			total = countPropertiesHelper(value, total)
		}
		total++
	})

	return total;
}

describe('isValid', () => {
	it('should return null if passed empty string', () => {
		const input = '';
		expect(isValid(input)).toBe(false)
	})

});

describe('countProperties', () => {

	it('should return 1 if json has 1 property', () => {
		const json = {
			name: 'steve'
		}

		expect(countProperties(json)).toBe(1)
	})

	it('should return 2 if json has 2 properties', () => {
		const input = {
			name: 'somename',
			age: 30
		};
		expect(countProperties(input)).toBe(2)
	})

	it('should return 4 if json has 4 properties', () => {
		const input = {
			name: {
				first: 'jimmy',
				last: 'carter'
			},
			age: 100
		};
		expect(countProperties(input)).toBe(4)
	})
	
	it('should return 7 if json has 7 properties', () => {
		const input = {
			name: {
				first: 'first',
				last: 'last'
			},
			location: {
				street: 'some street',
				city: 'some city',
				state: 'some state'
			}
		};
		expect(countProperties(input)).toBe(7)
	})
})

describe('listProperties', () => {
	it('should list properties of a given json', () => {
		// todo
	})
})
