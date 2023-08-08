import { aereo, almacen2, bg1, comercializadora, despachoa, p1, p2, p3, terrestre } from "../assets"

export const links = [
    {
        id: 1,
        title: 'Inicio',
        url: '/',
        idsec: '#inicio'
    },
    {
        id: 2,
        title: 'Sobre Nosotros',
        idsec: '#sobre-nosotros',
    },
    {
        id: 3,
        title: 'Nuestros Servicios',
        idsec: '#nuestros-servicios',
    },
    {
        id: 4,
        title: 'Contacto',
        idsec: '#contacto',
    }
]

export const ModalServices = [
    {
        id: 1,
        titlecard_and_modal: 'Transporte Maritimo',
        img: bg1,
        text: 'Expertos en manejo de contenedores y embarques consolidados en el intercambio entre México, Asia, Sudamérica, Centroamérica y Europa.',
    },
    {
        id: 2,
        titlecard_and_modal: 'Transporte Terrestre',
        img: terrestre,
        text: 'Nuestro servicios se extienden por todo el territorio nacional, EEUU y Canadá. Te apoyamos con contenedores, consolidados, refrigerados, peligrosos, y cargas proyecto.',
    },{
        id: 3,
        titlecard_and_modal: 'Transporte Aéreo',
        img: aereo,
        text: 'Somos tu mejor aliado en la coordinación de tus embarques aéreos para cargas de todos tipos. Refrigerados, peligrosos, urgentes y proyectos.',
    },
    {
        id: 4,
        titlecard_and_modal: 'Despacho Aduanal',
        img: despachoa,
        text: 'Contamos con agencia aduanal en cada uno de los puertos marítimos, aéreos y terrestres de México.',
    },
    {
        id: 5,
        titlecard_and_modal: 'Comercializadora',
        img: comercializadora,
        text: '¿No cuentas con padrón de importadores? Te ofrecemos comercializadoras generales, textiles, siderúrgicas, de alcoholes y peligrosos.',
    },{
        id: 6,
        titlecard_and_modal: 'Almacenajes',
        img: almacen2,
        text: 'Soluciones integrales para todo tipo de modalidades, refrigerados, peligrosos, adecuaciones normativas, etc',
    }
]

export const alianzasUsers = [
    {
        id: 1,
        img: p1,
        alt: 'imagen 1',
        text: 'Contamos Con experiencia en el mercado, ofreciendo un servicio de calidad y confianza.',
        translate: '',
    },
    {
        id: 2,
        img: p2,
        alt: 'imagen 2',
        text: 'Contamos con agencias aduanales en todo Mexico y en los principales puertos del mundo.',
        translate: '',
    },
    {
        id: 3,
        img: p3,
        alt: 'imagen 1',
        text: 'Manejamos varias soluciones logisticas para tu empresa, con el fin de que tu solo te enfoques en tu negocio. ',
        translate: '',
    }
]