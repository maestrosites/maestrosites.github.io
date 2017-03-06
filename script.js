var guys = {
	"Lolzy": "http://steamcommunity.com/profiles/76561198106147426",
	"Legacy": "http://steamcommunity.com/profiles/76561198178841609",
	"Holmeren": "http://steamcommunity.com/profiles/76561198313582925",
	"Nath": "http://steamcommunity.com/profiles/76561198290112488",
	"Atsuki": "http://steamcommunity.com/profiles/76561198268673985",
}

var links = {
	"steam": "http://steamcommunity.com/profiles/76561198138058643",
	"steam group": "https://steamcommunity.com/groups/maestroofficial",
}

var marquee = document.getElementsByClassName("js-marquee")[0];

for (var guy in guys)
{
	var node = document.createElement("a");
	var text = document.createTextNode(guy);

	node.appendChild(text);
	node.href = guys[guy];
	node.target = "_blank";
	marquee.appendChild(node);

	var keys = Object.keys(guys);
	if (guy != keys[keys.length - 1])
		marquee.innerHTML += ' - ';
}

var center = document.getElementById("center");

for (var link in links)
{
	var pre = document.createElement("pre");
	var node = document.createElement("a");
	var text = document.createTextNode(link);

	node.appendChild(text);
	node.href = links[link];
	node.target = "_blank";
	pre.appendChild(node);
	center.appendChild(pre);
}

var asciiTitle = document.getElementById("ascii");

var desired = "\
 /$$      /$$  /$$$$$$  /$$$$$$$$  /$$$$$$  /$$$$$$$$ /$$$$$$$   /$$$$$$ \n\
| $$$    /$$$ /$$__  $$| $$_____/ /$$__  $$|__  $$__/| $$__  $$ /$$__  $$ \n\
| $$$$  /$$$$| $$  | $$| $$      | $$  |__/   | $$   | $$  | $$| $$  | $$ \n\
| $$ $$/$$ $$| $$$$$$$$| $$$$$   |  $$$$$$    | $$   | $$$$$$$/| $$  | $$ \n\
| $$  $$$| $$| $$__  $$| $$__/    |____  $$   | $$   | $$__  $$| $$  | $$ \n\
| $$   $ | $$| $$  | $$| $$       /$$  | $$   | $$   | $$  | $$| $$  | $$ \n\
| $$  /  | $$| $$  | $$| $$$$$$$$|  $$$$$$/   | $$   | $$  | $$|  $$$$$$/ \n\
|__/     |__/|__/  |__/|________/ |______/    |__/   |__/  |__/ _______/  \
"

var iter = 0;
var completion = 0;

function timeout()
{
	setTimeout(function()
	{
		if (iter < desired.length - 1)
		{
			asciiTitle.innerHTML = desired.substring(0, iter);
			iter++;
		}
		completion = iter / desired.length;
		timeout();
	}, Math.pow(completion, 3) * 75)
}

timeout();
