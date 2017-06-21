function swapp()
{
	if(document.getElementById('main').classList == 'main1')
	{
		document.getElementById('main').classList.remove('main1');
		document.getElementById('main').classList.add('main2');
	}
	else
	{
		document.getElementById('main').classList.remove('main2');
		document.getElementById('main').classList.add('main1');
	}
}