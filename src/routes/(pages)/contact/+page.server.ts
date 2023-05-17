import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = (() => {
	return {
		pageName: 'İletişim',
		address: 'Güneştepe mah. Necip Fazıl Kısakürek Cd. No:102, Güngören/İSTANBUL',
		googleMapAddress: 'Güneştepe mah. Necip Fazıl Kısakürek Cd. No:102, Güngören/İSTANBUL',
		email: 'admin@elitasmakina.com',
		phone: '+90 539 579 88 79',
		subTitle: 'Teklif Alın',
		description:
			'Değerli müşterilerimiz, buharlı ütü makineleri üreten bir yer olarak size en iyi hizmeti sunmak için buradayız. Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz'
	};
}) as ServerLoad;
