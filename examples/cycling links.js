a.cycling-link
{
	color:red;	
}

/*---------------*/CSS END/*---------------*/

scriptData.cyclingLinks =
{
	add: 0
};

scriptData.cyclingLinks.nextCyclingLink = function(thisLink)
{	
	var cyclingLinkObject = JSON.parse(thisLink.dataset.cyclinglink);
	var v = cyclingLinkObject.variable;
	var cycleType = cyclingLinkObject.type.toLowerCase();
	var options = cyclingLinkObject.options;
	var current = thisLink.innerHTML;
	var currentIndex = 0;
	
	if (options[0].constructor === Array)
	{
		currentIndex = options.map(function (element) {return element[0]; }).indexOf(current);
	}
	else
	{
		currentIndex = options.indexOf(current);
	}

	var nextIndex = currentIndex;
	
	if (currentIndex >= (options.length - 1) || currentIndex == -1)
	{
		nextIndex = 0;
	}
	else
	{
		nextIndex++;
	}
	
	if (cycleType === "desc")
	{
		thisLink.innerHTML = options[nextIndex];
		eval(v + " = '" + options[nextIndex] + "'");
	}
	else if (cycleType.indexOf("maths") > -1)
	{
		thisLink.innerHTML = options[nextIndex][0];
		var op = " = ";
		if 		(cycleType === "mathsadd") 		{ op = "ADD"; }
		else if (cycleType === "mathssubtract") { op = "SUBTRACT"; }
		else if (cycleType === "mathsdivide")	{ op = "DIVIDE"; }
		else if (cycleType === "mathsmultiply") { op = "MULTIPLY"; }
		if (currentIndex != -1)
		{
			eval(v + Maths.Reverse[op] + options[currentIndex][1]);
		}
		eval(v + Maths.Operators[op] + options[nextIndex][1]);
	}
    else if (cycleType.indexOf("set") > -1)
    {
    	thisLink.innerHTML = options[nextIndex][0];
    	eval(v + " = " + options[nextIndex][1]);
        console.log(options[nextIndex][1]);
    }
};

showFunctions.push(function()
{
	var sd = scriptData.cyclingLinks;
	var cyclingLinks = document.querySelectorAll("[data-cyclinglink]");
	for(var i = 0; i < cyclingLinks.length; i++)
	{	
		//cyclingLinks[i].href = "javascript:;";
		cyclingLinks[i].classList.add("cycling-link");
		sd.nextCyclingLink(cyclingLinks[i]);
		cyclingLinks[i].addEventListener("click", sd.add = function()
		{
			sd.nextCyclingLink(this);
		}, false);
	}
});

hideFunctions.push(function()
{
	var cyclingLinks = document.querySelectorAll("[data-cyclinglink]");
	for(var i = 0; i < cyclingLinks.length; i++)
	{	
		cyclingLinks[i].removeEventListener("click", scriptData.cyclingLinks.add);
	}
});
