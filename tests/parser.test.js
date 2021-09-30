const {
	getDay,
	getStartShift,
	getEndShift,
} = require('../util/parser');

const TEST_MO = 'MO10:00-12:00';
const TEST_TH = 'TH01:00-09:00';
const TEST_SA = 'SA08:00-17:00';
const TEST_SU = 'SU11:00-20:00';

test('Extract day', () => {
	expect(getDay(TEST_MO)).toBe('MO');
	expect(getDay(TEST_TH)).toBe('TH');
	expect(getDay(TEST_SA)).toBe('SA');
	expect(getDay(TEST_SU)).toBe('SU');
});

test('Extract start of shift', () => {
	expect(getStartShift(TEST_MO)).toBe('10:00');
	expect(getStartShift(TEST_TH)).toBe('01:00');
	expect(getStartShift(TEST_SA)).toBe('08:00');
	expect(getStartShift(TEST_SU)).toBe('11:00');
});

test('Extract end of shift', () => {
	expect(getEndShift(TEST_MO)).toBe('12:00');
	expect(getEndShift(TEST_TH)).toBe('09:00');
	expect(getEndShift(TEST_SA)).toBe('17:00');
	expect(getEndShift(TEST_SU)).toBe('20:00');
});
