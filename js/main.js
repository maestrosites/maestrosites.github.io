$(document).ready(function() {
    var plinks = [
       	       	{
            name: 'spokzi',
            plink: 'http://steamcommunity.com/profiles/76561198125512925'
        },
		{
            name: 'jay',
            plink: 'http://steamcommunity.com/profiles/76561198333295965'
         },
		{
            name: 'legacy',
            plink: 'http://steamcommunity.com/profiles/76561198178841609'
	   },       
	   {
            name: 'tofi',
            plink: 'http://steamcommunity.com/profiles/76561198347667273'
        },
		{
            name: 'tanya',
            plink: 'http://steamcommunity.com/profiles/76561198124088101'
		},
        {
            name: 'ollie',
            plink: 'http://steamcommunity.com/profiles/76561198063429369'
			
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