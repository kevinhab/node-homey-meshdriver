'use strict';

module.exports = {
	get: 'SENSOR_ALARM_GET',
	getParser: () => ({
		'Sensor Type': 'CO Alarm',
	}),
	report: 'SENSOR_ALARM_REPORT',
	reportParser: report => {
		if (report &&
			report.hasOwnProperty('Sensor Type') &&
			report['Sensor Type'] === 'CO Alarm' &&
			report.hasOwnProperty('Sensor State')) {
			return report['Sensor State'] === 'alarm';
		}
		return null;
	},
};
