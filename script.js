function timeout() {
  setTimeout(function() {
    iter < desired.length - 1 && (asciiTitle.innerHTML = desired.substring(0, iter), iter++), completion = iter / desired.length, timeout()
  }, 75 * Math.pow(completion, 3))
}
var guys = {
    lolzy: "http://steamcommunity.com/profiles/76561198106147426",
    legacy: "http://steamcommunity.com/profiles/76561198178841609",
    holmeren: "http://steamcommunity.com/profiles/76561198313582925",
    nath: "http://steamcommunity.com/profiles/76561198290112488",
    atsuki: "http://steamcommunity.com/profiles/76561198268673985",
    anon: "http://steamcommunity.com/profiles/76561198359910180",
	ollie: "http://steamcommunity.com/profiles/76561198368527533"
  },
  links = {
    steam: "http://steamcommunity.com/profiles/76561198138058643",
    "steam group": "https://steamcommunity.com/groups/maestroofficial"
  },
  marquee = document.getElementsByClassName("js-marquee")[0];
for (var guy in guys) {
  var node = document.createElement("a"),
    text = document.createTextNode(guy);
  node.appendChild(text), node.href = guys[guy], node.target = "_blank", marquee.appendChild(node);
  var keys = Object.keys(guys);
  guy != keys[keys.length - 1] && (marquee.innerHTML += " - ")
}
var center = document.getElementById("center");
for (var link in links) {
  var pre = document.createElement("pre"),
    node = document.createElement("a"),
    text = document.createTextNode(link);
  node.appendChild(text), node.href = links[link], node.target = "_blank", pre.appendChild(node), center.appendChild(pre)
}
var asciiTitle = document.getElementById("ascii"),
  desired = " /$$      /$$  /$$$$$$  /$$$$$$$$  /$$$$$$  /$$$$$$$$ /$$$$$$$   /$$$$$$ \n| $$$    /$$$ /$$__  $$| $$_____/ /$$__  $$|__  $$__/| $$__  $$ /$$__  $$ \n| $$$$  /$$$$| $$  | $$| $$      | $$  |__/   | $$   | $$  | $$| $$  | $$ \n| $$ $$/$$ $$| $$$$$$$$| $$$$$   |  $$$$$$    | $$   | $$$$$$$/| $$  | $$ \n| $$  $$$| $$| $$__  $$| $$__/    |____  $$   | $$   | $$__  $$| $$  | $$ \n| $$   $ | $$| $$  | $$| $$       /$$  | $$   | $$   | $$  | $$| $$  | $$ \n| $$  /  | $$| $$  | $$| $$$$$$$$|  $$$$$$/   | $$   | $$  | $$|  $$$$$$/ \n|__/     |__/|__/  |__/|________/ |______/    |__/   |__/  |__/ _______/  ",
  iter = 0,
  completion = 0;
timeout();