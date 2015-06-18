$( document ).ready( function () {
	$( '#video-switcher1' ).click(function(){	
		$( "#ivideo1" ).css( "display", "block" );
		$( "#ivideo2" ).css( "display", "none" );
		$( "#ivideo3" ).css( "display", "none" );
		$( "#ivideo4" ).css( "display", "none" );
	});
	$( '#video-switcher2' ).click(function(){	
		$( "#ivideo1" ).css( "display", "none" );
		$( "#ivideo2" ).css( "display", "block");
		$( "#ivideo3" ).css( "display", "none" );
		$( "#ivideo4" ).css( "display", "none" );
	});
	$( '#video-switcher3' ).click(function(){	
		$( "#ivideo1" ).css( "display", "none" );
		$( "#ivideo2" ).css( "display", "none");
		$( "#ivideo3" ).css( "display", "block" );
		$( "#ivideo4" ).css( "display", "none" );
	});
	$( '#video-switcher4' ).click(function(){	
		$( "#ivideo1" ).css( "display", "none" );
		$( "#ivideo2" ).css( "display", "none");
		$( "#ivideo3" ).css( "display", "none" );
		$( "#ivideo4" ).css( "display", "block" );
	});
	$( '#video-switcher5' ).click(function(){	
		$( "#ivideo5" ).css( "display", "block" );
		$( "#ivideo6" ).css( "display", "none" );
		$( "#ivideo7" ).css( "display", "none" );
		$( "#ivideo8" ).css( "display", "none" );
	});
	$( '#video-switcher6' ).click(function(){	
		$( "#ivideo5" ).css( "display", "none" );
		$( "#ivideo6" ).css( "display", "block");
		$( "#ivideo7" ).css( "display", "none" );
		$( "#ivideo8" ).css( "display", "none" );
	});
	$( '#video-switcher7' ).click(function(){	
		$( "#ivideo5" ).css( "display", "none" );
		$( "#ivideo6" ).css( "display", "none");
		$( "#ivideo7" ).css( "display", "block" );
		$( "#ivideo8" ).css( "display", "none" );
	});
	$( '#video-switcher8' ).click(function(){	
		$( "#ivideo5" ).css( "display", "none" );
		$( "#ivideo6" ).css( "display", "none");
		$( "#ivideo7" ).css( "display", "none" );
		$( "#ivideo8" ).css( "display", "block" );
	});
});