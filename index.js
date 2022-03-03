const puppeteer = require('puppeteer');



async function salvaRelatorio() {
	const navegador = await puppeteer.launch();
	const pagina = await navegador.newPage();
	
	await pagina.goto('https://status.alura.com.br/');
		
	await pagina.waitForSelector('.success', {visible: true});
	
	await pagina.screenshot({path: 'captura.png'});
	
	await navegador.close();
}

salvaRelatorio();
