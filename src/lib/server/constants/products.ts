export interface IImage {
	src: string;
	alt: string;
}
export interface IProduct {
	name: string;
	slug?: string;
	url: string;
	description: string;
	explanation: string;
	img?: IImage;
}
export interface ICategories {
	category: string;
	slug?: string;
	items: IProduct[];
}

export const products: ICategories[] = [
	{
		category: 'Buhar Kazanları',
		slug: 'buhar',
		items: [
			{
				name: '4 Çıkışlı',
				slug: '4-cikisli',
				url: '',
				description: 'Buhar Kazanı',
				explanation: '',
				img: {
					src: '/img/selfresize/4-cikisli-buhar.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: '3 Çıkışlı',
				slug: '3-cikisli',
				url: '/#',
				description: 'Buhar Kazanı',
				explanation: '',
				img: {
					src: '/img/selfresize/3-cikisli-buhar.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: '2 Çıkışlı',
				slug: '2-cikisli',
				url: '/#',
				description: 'Buhar Kazanı',
				explanation: '',
				img: {
					src: '/img/selfresize/2-cikisli-buhar.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Doğalgazlı CE Belgeli İgdaş Onaylı',
				slug: 'dogalgazli-belgeli-onayli',
				url: '/#',
				description: 'Buhar Jeneratörü',
				explanation: '',
				img: {
					src: '/img/selfresize/dogalgazli-ce-belgeli.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: '60KW',
				slug: '60kw',
				url: '/#',
				description: 'Buhar Jeneratörü',
				explanation: '',
				img: {
					src: '/img/selfresize/60-kw-buhar-jene.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: '30KW',
				slug: '30kw',
				url: '/#',
				description: 'Buhar Jeneratörü',
				explanation: '',
				img: {
					src: '/img/selfresize/30-kw-buhar-jene.webp',
					alt: 'Ürün resmi'
				}
			}
		]
	},
	{
		category: 'Paskaralar',
		slug: 'paskar',
		items: [
			{
				name: 'Işıklı Balanserli Geniş',
				slug: 'isikli-balanserli-genis',
				url: '/#',
				description: 'Isıtmasız Paskara',
				explanation: '',
				img: {
					src: '/img/selfresize/isikli-balanserli-genis-isitmasiz.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Kendinden Kazanlı',
				slug: 'kendinden-kazanli',
				url: '/#',
				description: 'Geniş Paskara',
				explanation: '',
				img: {
					src: '/img/selfresize/kendinden-kazanli-genis.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Isıtmasız',
				slug: 'isitmasiz',
				url: '/#',
				description: 'Dar Paskara',
				explanation: '',
				img: {
					src: '/img/selfresize/isitmasiz-dar-paskara.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Işıklı Balanserli Kendinden Kazanlı',
				slug: 'isikli-balanserli-kendinden-kazanli',
				url: '/#',
				description: 'Geniş Paskara',
				explanation: '',
				img: {
					src: '/img/selfresize/isikli-balanserli-kendinden-kazanli.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Işıklı Balanserli Dar',
				slug: 'isikli-balanserli-dar',
				url: '/#',
				description: 'Pullu Paskara',
				explanation: '',
				img: {
					src: '/img/selfresize/isikli-balanserli-dar-pullu.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Kendinden Kazanlı',
				slug: 'kendinden-kazanli',
				url: '/#',
				description: 'Dar Paskara',
				explanation: '',
				img: {
					src: '/img/selfresize/kendinden-kaznali-dar.webp',
					alt: 'Ürün resmi'
				}
			}
		]
	},
	{
		category: 'Transfer Baskı Presleri',
		slug: 'transfer',
		items: [
			{
				name: '20-20 Gezer Kafa',
				slug: '20-20-gezer-kafa',
				url: '/#',
				description: 'Transfer Baskı Presi',
				explanation: '',
				img: {
					src: '/img/selfresize/20-20-gezer-kafa.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: '20-20 Döner Kafa',
				slug: '20-20-doner-kafa',
				url: '/#',
				description: 'Transfer Geniş Paskara',
				explanation: '',
				img: {
					src: '/img/selfresize/20-20-doner-kafa-transfer.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: '40-50 Taş Yapıştırma',
				slug: '40-50-tas-yapistirma',
				url: '/#',
				description: 'Pres Makinası',
				explanation: '',
				img: {
					src: '/img/selfresize/40-50-tas-yapistirma.webp',
					alt: 'Ürün resmi'
				}
			}
		]
	},
	{
		category: 'Çakım Makinaları',
		slug: 'cakim',
		items: [
			{
				name: 'Motorlu',
				slug: 'motorlu1',
				url: '/#',
				description: 'Çakım Makinası',
				explanation: '',
				img: {
					src: '/img/selfresize/motorl-cakim-makinasi.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Motorlu',
				slug: 'motorlu2',
				url: '/#',
				description: 'Çakım Makinası',
				explanation: '',
				img: {
					src: '/img/selfresize/motorlu-cakim-makinasi.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Elektrikli',
				slug: 'elektrikli',
				url: '/#',
				description: 'Çakım Makinası',
				explanation: '',
				img: {
					src: '/img/selfresize/elektrikli-cakim-makinesi.webp',
					alt: 'Ürün resmi'
				}
			}
		]
	},
	{
		category: 'Leke Temizleme Makinaları',
		slug: 'dirtycleaners*',
		items: [
			{
				name: 'Masa Tipi',
				slug: "masa-tipi",
				url: '/#',
				description: 'Leke Makinası',
				explanation: '',
				img: {
					src: '/img/selfresize/masa-tipi-leke.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Dar Dipi Klasik',
				slug: 'dar-tipi-klasik',
				url: '/#',
				description: 'Leke Makinası',
				explanation: '',
				img: {
					src: '/img/selfresize/dar-tipi-klasik-leke.webp',
					alt: 'Ürün resmi'
				}
			}
		]
	},
	{
		category: 'Silter Ütü Grubu',
		slug: 'silters',
		items: [
			{
				name: 'Silter Süper Mini 1 Lt Manometreli',
				slug: 'silter-supermini-1lt',
				url: '/#',
				description: 'Profesyonel Ütü',
				explanation: '',
				img: {
					src: '/img/selfresize/silter-super-mini-1lt.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Magma 3,5 Lt',
				slug: 'magma-3-5',
				url: '/#',
				description: 'Profesyonel Ütü',
				explanation: '',
				img: {
					src: '/img/selfresize/magma-3bucuk.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'SPRMN 2035 Silter Süper Mini',
				slug: 'sprmn-2035-silter-super-mini',
				url: '/#',
				description: 'Profesyonel - 3,5 Lt',
				explanation: '',
				img: {
					src: '/img/selfresize/SPRMN-2035-super-mini.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'SPRMN 2005 Silter Süper Mini - 5 Lt',
				slug: 'sprmn-2005-silter-super-mini',
				url: '/#',
				description: 'Buharlı Ütü',
				explanation: '',
				img: {
					src: '/img/selfresize/silter-SPRMN-2005.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'SPRMN 2030 Gazella Silter Süper Mini',
				slug: 'sprmn-2030-gazella-silter',
				url: '/#',
				description: 'Buhar Kazanlı Ütü',
				explanation: '',
				img: {
					src: '/img/selfresize/SPRMN-2030-Gazella.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Potent Fan Dar Masa 3,5 Lt SMPSA 2135 APD',
				slug: 'potent-fan-dar-masa-3-5',
				url: '/#',
				description: 'Ütü Makinası',
				explanation: '',
				img: {
					src: '/img/selfresize/Potent-dar-masa-3bucuk-2135.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'SPRMN 2036 3,5 Lt Askıda FD',
				slug: 'sprmn-2036-3-5-lt',
				url: '/#',
				description: 'Buhar Kazanlı Ütü',
				explanation: '',
				img: {
					src: '/img/selfresize/3bucuk--askida-SPRMN-2036.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Silter-Bitsy MiniSilter SM BM 2035 Çift Fırçalı',
				slug: 'silter-bitsy-minisilter-sm-bm-2035',
				url: '/#',
				description: 'Kazanlı Ütü',
				explanation: '',
				img: {
					src: '/img/selfresize/silter-bitsy-2035-ciftfircali.webp',
					alt: 'Ürün resmi'
				}
			}
		]
	},
	{
		category: 'Mal Taşıma Arabaları',
		slug: 'transpalet',
		items: [
			{
				name: 'Çift Siperli',
				slug: 'cift-siperli',
				url: '/#',
				description: 'Mal Taşıma Arabası',
				explanation: '',
				img: {
					src: '/img/selfresize/cift-siperli-maltasima.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Ağır Hizmet Modeli',
				slug: 'agir-hizmet-modeli',
				url: '/#',
				description: 'Mal Taşıma Arabası',
				explanation: '',
				img: {
					src: '/img/selfresize/agir-hizmet-maltasima.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Plastik Tekne',
				slug: 'plastik-tekne',
				url: '/#',
				description: 'Mal Taşıma Arabası',
				explanation: '',
				img: {
					src: '/img/selfresize/plastik-tekne-maltasima.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Tekerlekli Hasır Tel Sepet',
				slug: 'tekerlekli-hasir-tel-sepet',
				url: '/#',
				description: 'Mal Taşıma Arabası',
				explanation: '',
				img: {
					src: '/img/selfresize/tekerlekli-hasir-telsepet-maltasima.webp',
					alt: 'Ürün resmi'
				}
			}
		]
	},
	{
		category: 'Kalite Kontrol Masaları',
		slug: 'qualityco',
		items: [
			{
				name: 'Üstten Işıklı Eğim Ayarlı',
				slug: 'ustten-isikli-egim-ayarli',
				url: '/#',
				description: 'Kalite Kontrol Masası',
				explanation: '',
				img: {
					src: 'img/selfresize/ustten-isikli-egim-ayarli-cc.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Sabit Eğimli',
				slug: 'sabit-egimli',
				url: '/#',
				description: 'Kalite Kontrol Masası',
				explanation: '',
				img: {
					src: 'img/selfresize/sabit-egimli-cc.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Sabit Eğimli Üstten Işıklı',
				slug: 'sabit-egimli-ustten-isikli',
				url: '/#',
				description: 'Kalite Kontrol Masası',
				explanation: '',
				img: {
					src: 'img/selfresize/sabit-egimli-ustten-isikli-cc.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Kanatlı',
				slug: 'kanatli',
				url: '/#',
				description: 'Kalite Kontrol Masası',
				explanation: '',
				img: {
					src: 'img/selfresize/kanatli-cc.webp',
					alt: 'Ürün resmi'
				}
			}
		]
	},
	{
		category: 'Diğer Ürünler',
		slug: 'others',
		items: [
			{
				name: 'Yan Dikiş Açma',
				slug: 'yan-dikis-acma',
				url: '/#',
				description: 'Makinası',
				explanation: '',
				img: {
					src: 'img/selfresize/yan-dikis-acma.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Pantolon Şişirme',
				slug: 'pantolon-sisirme',
				url: '/#',
				description: 'Robotu',
				explanation: '',
				img: {
					src: '/img/selfresize/pantolon-sisirme.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Çift Kafa İplik Temizleme',
				slug: 'cift-kafa-iplik-temizleme',
				url: '/#',
				description: 'Robotu',
				explanation: '',
				img: {
					src: '/img/selfresize/cift-kafa-iplik-temizleme.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Kılçık Temizleme',
				slug: 'kilcik',
				url: '/#',
				description: 'Makinası',
				explanation: '',
				img: {
					src: '/img/selfresize/kilcik-makinasi.webp',
					alt: 'Ürün resmi'
				}
			}
		]
	},
	{
		category: 'Yedek Parça',
		slug: 'yedek',
		items: [
			{
				name: 'Silter SY KF 3722Y Potent Salyangoz',
				slug: 'silter-sy-kf-3722y',
				url: '/#',
				description: 'Radyal Fan',
				explanation: '',
				img: {
					src: '/img/selfresize/silter-37220Y-potent-salganyoz.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Buhar Kazanı Su Pompası',
				slug: 'buhar-kazanli-su-pompasi',
				url: '/#',
				description: '',
				explanation: '',
				img: {
					src: '/img/selfresize/buhar-kazani-su-pompasi.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Silter STB 200G Buharlı El Ütüsü',
				slug: 'silter-stb-200g',
				url: '/#',
				description: 'Sanayi Tipi Hafif Ütü',
				explanation: '',
				img: {
					src: '/img/selfresize/silter-stb-200G-buharli-el.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'STB 295 Gazella "Slim" Dikiş Açma',
				slug: 'stb-295-gazella-slim',
				url: '/#',
				description: 'Buharlı El Ütüsü',
				explanation: '',
				img: {
					src: '/img/selfresize/stb-295-gazella-slim.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Magma Buharlı',
				slug: 'magma-buharli',
				url: '/#',
				description: 'El Ütüsü',
				explanation: '',
				img: {
					src: '/img/selfresize/magma-buharli-el.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Leke Tabancası',
				slug: 'leke-tabancasi',
				url: '/#',
				description: '',
				explanation: '',
				img: {
					src: '/img/selfresize/leke-tabancasi.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Paskara Kare ',
				slug: 'paskara-kare-fan-motoru',
				url: '/#',
				description: 'Fan motoru',
				explanation: '',
				img: {
					src: '/img/selfresize/paskara-kare-fan-motoru.webp',
					alt: 'Ürün resmi'
				}
			},
			{
				name: 'Kazancı Ütü Selenoid Valf',
				slug: 'kazanci-utu-selenoid-valf',
				url: '/#',
				description: '',
				explanation: '',
				img: {
					src: '/img/selfresize/kazanli-utu-selenoid-valf.webp',
					alt: 'Ürün resmi'
				}
			}
		]
	}
];
