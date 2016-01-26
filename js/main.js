
$('.signin').on('click', function()
	{
		$('.signin').fadeOut(300);
		$('.modal').css('display', 'block');
	}

);


$('.close').on('click', function()
	{
		$('.modal').fadeOut(300);
		$('.signin').fadeIn(500);

	}
);

$('.submit').on('click', function()
	{
		$("input").addClass("error");

	}
);

$("input").on('mouseover', function()
	{
		$("input").removeClass("error");

	}
);

$('.modal').on('click', function()
	{
		$('.modal').fadeOut(300);
		$('.signin').fadeIn(500);

	}
);

$('.getstarted').on('click', function (event)

{
	event.stopPropagation();

}

);

