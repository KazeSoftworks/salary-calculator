const buildEmployee = require('../components/employee/employeeBuilder');

const {
	getShiftNames,
	calculateSalary,
	payment,
} = require('../components/payment');

describe('Shift Names', () => {
	test('Getting the shift names that are only inside one shift range', () => {
		expect(getShiftNames('19:00', '20:00')).toStrictEqual(['night']);
		expect(getShiftNames('01:00', '08:00')).toStrictEqual([
			'morning',
		]);
		expect(getShiftNames('10:00', '15:00')).toStrictEqual([
			'afternoon',
		]);
	});

	test('Getting the shift names that are inside multiple shift ranges', () => {
		expect(getShiftNames('11:00', '20:00')).toStrictEqual([
			'afternoon',
			'night',
		]);
		expect(getShiftNames('05:00', '12:00')).toStrictEqual([
			'morning',
			'afternoon',
		]);
		expect(getShiftNames('08:00', '20:00')).toStrictEqual([
			'morning',
			'afternoon',
			'night',
		]);
	});

	test('Corner cases where shifts collide with shift limits', () => {
		expect(getShiftNames('18:00', '23:59')).toStrictEqual(['night']);
		expect(getShiftNames('00:00', '09:00')).toStrictEqual([
			'morning',
		]);
		expect(getShiftNames('09:00', '18:00')).toStrictEqual([
			'afternoon',
		]);
	});

	test('Corner cases where the shift is all the day', () => {
		expect(getShiftNames('00:00', '23:59')).toStrictEqual([
			'morning',
			'afternoon',
			'night',
		]);
	});
});

describe('Payment by Work hours', () => {
	test('Weekday work', () => {
		expect(calculateSalary(6, 'morning', 'MO')).toBe(150);
		expect(calculateSalary(3, 'afternoon', 'TU')).toBe(45);
		expect(calculateSalary(5, 'night', 'FR')).toBe(100);
	});

	test('Weekend work', () => {
		expect(calculateSalary(6, 'morning', 'SA')).toBe(180);
		expect(calculateSalary(3, 'afternoon', 'SU')).toBe(60);
		expect(calculateSalary(5, 'night', 'SA')).toBe(125);
	});
});

describe('Salary payment', () => {
	test('RENE Sample payment', () => {
		const SAMPLE =
			'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00';
		expect(payment(buildEmployee(SAMPLE))).toBe(215);
	});

	test('ASTRID Sample payment', () => {
		const SAMPLE = 'ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00';
		expect(payment(buildEmployee(SAMPLE))).toBe(85);
	});

	test('ANGEL Sample payment', () => {
		const SAMPLE =
			'ANGEL=MO08:00-14:00,TU15:00-20:00,TH01:00-09:00,FR09:00-12:00,SA09:00-18:00';
		expect(payment(buildEmployee(SAMPLE))).toBe(610);
	});

	test('NICKY Sample payment', () => {
		const SAMPLE = 'NICKY=TH05:00-21:00,SU17:00-00:00';
		expect(payment(buildEmployee(SAMPLE))).toBe(465);
	});
});
