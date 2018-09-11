const platform = require('platform');
'use strict';

const deviceName = function () {
	this.platformName = function () {
		const plat = platform.os.family;
		switch (plat) {
			case "Win32":
				return deviceNameSwitch = "Windows";
			case "Win64":
				return deviceNameSwitch = "Windows";
			case "Mac":
				return deviceNameSwitch = "Macintosh";
			default:
				deviceNameSwitch = "Device name is not unreachable";
		};
	}
}
module.exports = new deviceName();
