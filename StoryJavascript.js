window.scriptData = {};

window.showFunctions = [];
window.hideFunctions = [];

window.currentPassageData = {};
window.previousPassageData = {};

window.filterPassageByTag = function(passages, str)
{
	return _.filter(passages, function(p)
	{
		if (_.contains(p.tags, str))
		{
			return p;
		}
	});
};

window.specialPassage = function(passages)
{
	for (var i = 0; i < passages.length; i++)
	{
		var p = passages[i];
		if ((p.tags.indexOf("javascript") > -1) && (p.tags.indexOf("css") == -1))
		{
			var html = p.source;
			p.source = "\<% " + html + " %\>";
			p.render();
		}
		else if ((p.tags.indexOf("css") > -1) && (p.tags.indexOf("javascript") == -1))
		{
			$('body').append('\<style\>' + p.source + '\</style\>');
		}
		else if ((p.tags.indexOf("css") > -1) && (p.tags.indexOf("javascript") > -1))
		{
			var getData = p.source.split("CSS END");
			$('body').append('\<style\>' + getData[0] + '\</style\>');
			p.source = "\<% " + getData[1] + " %\>";
			p.render();
		}
	}
}

$(window).on("startstory", function()
{
	var high = filterPassageByTag(story.passages, "high");
	var medium = filterPassageByTag(story.passages, "med");
	var low = filterPassageByTag(story.passages, "low");
	var no = _.difference(story.passages, high, medium, low);
	specialPassage(high);
	specialPassage(medium);
	specialPassage(low);
	specialPassage(no);
});

$(window).on("showpassage:after", function()
{
	previousPassageData = $.extend(true, {}, currentPassageData);
	currentPassageData = {};
	
	if (showFunctions.length > 0)
	{
		for (var i = 0; i < showFunctions.length; i++)
		{
			showFunctions[i]();
		}
	}
});

$(window).on("hidepassage", function()
{	
	if (hideFunctions.length > 0)
	{
		for (var i = 0; i < hideFunctions.length; i++)
		{
			hideFunctions[i]();
		}
	}
});
