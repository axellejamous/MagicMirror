/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				timezone: "CET"
			}
		},
		{
			module: "calendar",
			header: "Belgian Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.greyson.be/belgische_feestdagen.ics" // "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "calendar",
			header: "Personal Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "https://calendar.google.com/calendar/ical/laundry_day%40hotmail.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Antwerpen",
				locationID: "2803138",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "37eb0ec8ee797e14c118613aa7b714cc"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Antwerpen",
				locationID: "2803138",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "37eb0ec8ee797e14c118613aa7b714cc"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "TechCrunch",
						url: "http://feeds.feedburner.com/TechCrunch?format=xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: "MMM-AlarmClock",
			position: "top_right",
			config: {
				alarms: [
					{time: "07:00", days: [1,2,3,4,5,6,7], sound: "alarm.mp3", title: "School", message: "Get ready for school!!"},
					{time: "19:20", days: [1,2,3,4,5,6,7], sound: "alarm.mp3", title: "Alarm", message: "Wake up!"},
				],		
			}
		},
		{
			module: 'voicecontrol',
			position: 'bottom_left',
			config: {
				models: [
					{
						keyword: "stopAlarm", //keyword
						description: "Say 'Stop Alarm' to stop the alarm",
						file: "stopAlarm.pmdl", //trained model file named stopAlarm
						message: "STOP_ALARM"
					},
					{
						keyword: "setCoffee",
						description: "Say 'Set Coffee' to start the coffee machine",
						file: "setCoffee.pmdl",
						message: "SET_COFFEE"
					},
					{
						keyword: "light",
						description: "Say 'Lights' to turn the night lamp on",
						file: "Light.pmdl",
						message: "LIGHTS_ON"
					},
					{
						keyword: "dark",
						description: "Say 'Dark' to turn the night lamp off",
						file: "Dark.pmdl",
						message: "LIGHTS_OFF"
					}
					]					
			}
		},
		{
			module: 'MMM-mqtt',
			position: "top_right",
			header: 'MQTT sender',
			config: {
			}
		},
		{
			module: 'MMM-mqttReceiver',
			position: "top_right",
			header: 'MQTT receiver',
			config: {
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
