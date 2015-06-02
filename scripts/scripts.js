$(document).ready( function calculate() {
	$('#start').click( function() {
		$(this).fadeTo(0, 0.6);
		$('#totalMultiplier').empty();
		var cpt = $('input[name=captain]').val();
		var fr_cpt = $('input[name=fr_captain]').val();
		var multiplier = (cpt*fr_cpt).toFixed(2);
		var ship = $('input[name=ship]').val();
		var perfect = 1.9;
		$('#totalMultiplier').append(multiplier);

		$('#1st_value').text((20000/multiplier/ship/perfect).toFixed(0));
		$('#2nd_value').text((20000/multiplier/ship/1.3/perfect).toFixed(0));
		$('#3rd_value').text((20000/multiplier/ship/1.6/perfect).toFixed(0));
		$('#4th_value').text((20000/multiplier/ship/1.9/perfect).toFixed(0));
		$('#5th_value').text((20000/multiplier/ship/2.2/perfect).toFixed(0));
		$('#6th_value').text((20000/multiplier/ship/2.5/perfect).toFixed(0));
	});

	

	$('#start').mouseout( function() {
		$(this).fadeTo(100, 1);
	});
});

