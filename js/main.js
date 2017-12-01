$(document).ready(function() {
    var plinks = [
       	       	{
            name: 'lolzy',
            plink: 'http://steamcommunity.com/profiles/76561198106147426'
        },
		{
            name: 'cha',
            plink: 'http://steamcommunity.com/profiles/76561198249090462'
         },
		{
            name: 'legacy',
            plink: 'http://steamcommunity.com/profiles/76561198178841609'
	   },       
	   {
            name: 'atsuki',
            plink: 'http://steamcommunity.com/profiles/76561198268673985'
        },
		{
            name: 'sovereign',
            plink: 'http://steamcommunity.com/profiles/76561197963292002'
		},
        {
            name: 'ollie',
            plink: 'http://steamcommunity.com/profiles/76561198218496005'
			
        },
		];    
	
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '" target="_blank">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' - ')
        }
    }
    $('#marquee').marquee({
        duration: 7000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })

	window.SetVolume = function(val)
	{
    var player = document.getElementById('video');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
	}
	
	});