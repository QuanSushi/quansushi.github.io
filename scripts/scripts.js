$(document).ready( function calculate() {
	$('#start').click( function() {
		$(this).fadeTo(0, 0.6);
		$('#totalMultiplier').empty();
		
		var cpt = $('select[name=captain]').val();
		var fr_cpt = $('select[name=fr_captain]').val();
		var ship = $('select[name=ship]').val();
		var type = $('select[name=type]').val();
		var orb = $('select[name=orb]').val();
		var combo = $('select[name=combo]').val();
		var timing = $('select[name=timing]').val();
		var multiplier = (cpt*fr_cpt*ship*type*orb);
		
		$('#totalMultiplier').append((multiplier).toFixed(2));

		var turtle = $('select[name=turtle]').val();

		$('#1st_value').text((turtle/(timing*multiplier*1 + multiplier*1/combo)).toFixed(0));
		$('#2nd_value').text((turtle/(timing*multiplier*1.3 + multiplier*1.3/combo)).toFixed(0));
		$('#3rd_value').text((turtle/(timing*multiplier*1.6 + multiplier*1.6/combo)).toFixed(0));
		$('#4th_value').text((turtle/(timing*multiplier*1.9 + multiplier*1.9/combo)).toFixed(0));
		$('#5th_value').text((turtle/(timing*multiplier*2.2 + multiplier*2.2/combo)).toFixed(0));
		$('#6th_value').text((turtle/(timing*multiplier*2.5 + multiplier*2.5/combo)).toFixed(0));
	});

	

	$('#start').mouseout( function() {
		$(this).fadeTo(100, 1);
	});
});

