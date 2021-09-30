WEEKENDS = ['SA', 'SU'];
SHIFT_HOURS_START = {
	morning: '00:00',
	afternoon: '09:01',
	night: '18:01',
};
SHIFT_HOURS_END = {
	morning: '09:00',
	afternoon: '18:00',
	night: '23:59',
};
WEEKDAYS_PAYMENT = { morning: 25, afternoon: 15, night: 20 };
WEEKEND_PAYMENT = { morning: 30, afternoon: 20, night: 25 };

module.exports = {
	SHIFT_HOURS_START,
	SHIFT_HOURS_END,
	WEEKENDS,
	WEEKDAYS_PAYMENT,
	WEEKEND_PAYMENT,
};
