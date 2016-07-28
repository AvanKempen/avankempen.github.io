core.modules['home'] = {
	construct: function($div) {
		var self = this,
			date = new Date();
		
		$div.find(".date").html(self.dayHandle(date));
		$div.find(".time").html(self.timeHandle());
		setInterval(function() {
			$div.find(".time").html(self.timeHandle());
		}, 1000);
	},
	
	timeHandle: function(d) {
		d = d ? d : new Date();
		var h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
      		m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes(),
      		s = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
      		
      	return h + ':' + m + ':' + s;
	},
	
	dayHandle: function(d) {
		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
			months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		
		var month = months[d.getMonth()],
			day = days[d.getDay()],
			date = d.getDate();
			
		return day + ', ' + date + ' ' + month; 
	},

	destruct: function() {
	}
}