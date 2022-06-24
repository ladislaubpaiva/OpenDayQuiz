const quiz = [
  {
    img: '',
    topic: 'Cultura Geral',
    questions: [
      {
        img: 'http://www.os5elementos.com/wp-content/uploads/2012/11/linha_de_costa.jpg',
        question: 'Qual é o país com a maior linha de costa do mundo?',
        options: ['Rússia', 'Canadá', 'Indonesia', 'EUA'],
        answer: 2,
      },
      {
        img: 'https://www.britannica.com/explore/savingearth/wp-content/uploads/sites/4/2019/03/population-hero-1.jpg',
        question: 'Qual é o país com o maior número de população do mundo?',
        options: ['Índia', 'EUA', 'Russia', 'China'],
        answer: 4,
      },
      {
        img: 'https://www.onde-e-quando.net/site/images/illustration/oualler/philippines-manille_795.jpg',
        question: 'Qual é a capital das Filipinas?',
        options: ['Manila', 'Jakarta', 'Honolulu', 'Díli'],
        answer: 1,
      },
      {
        img: 'https://static.natgeo.pt/files/styles/image_3200/public/01greatbarrierreef.jpg?w=1190&h=792',
        question: 'A que país pertence a Grande Barreira de Coral?',
        options: ['Nova Zelândia', 'Austrália', 'Indonesia', 'Japão'],
        answer: 2,
      },
      {
        img: 'https://daitaliacidadania.com/wp-content/uploads/2021/10/60187ed2bf8a538c21457ade_Artigo-47.jpg',
        question: 'Qual é o país mais pequeno do mundo?',
        options: ['Lichteinstein', 'Luxemburgo', 'Mónaco', 'Vaticano'],
        answer: 4,
      },
      {
        img: 'https://thumbor.bigedition.com/niagara-falls-one-of-the-biggest-waterfalls-in-the-world/P9jCtcGn-4GU34vOLeKOlWDtHnQ=/139x0:2004x1398/800x600/filters:format(webp):quality(80)/granite-web-prod/49/57/4957053c0b2d4e9d801cc3b4b2bfbb25.jpeg',
        question: 'Qual é o país com a cascata mais alta do mundo?',
        options: ['EUA', 'Brasil', 'África do Sul', 'Venezuela'],
        answer: 4,
      },
      {
        img: 'https://cms.canberra.com.au/app/uploads/2022/03/Adam-McGrath-aerial-featured.jpg',
        question: 'Qual é a capital da Austrália?',
        options: ['Sydney', 'Adelaide', 'Canberra', 'Melbourne'],
        answer: 3,
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mount_Fuji_from_Lake_Shoji_%2815443819010%29.jpg/1200px-Mount_Fuji_from_Lake_Shoji_%2815443819010%29.jpg',
        question: 'Em que país se localiza o Monte Fuji?',
        options: ['Perú', 'China', 'Japão', 'Coreia do Norte'],
        answer: 3,
      },
      {
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/47/4c/de/cape-of-good-hope-nature.jpg?w=1200&h=-1&s=1',
        question: 'Em que país se localiza o Cabo da Boa Esperança?',
        options: ['EUA', 'África do Sul', 'Austrália', 'Canadá'],
        answer: 2,
      },
      {
        img: 'https://cdn.theculturetrip.com/wp-content/uploads/2018/12/shutterstock_141813661.jpg',
        question: 'Qual é o país com o maior número de vulcões ativos?',
        options: ['Indonésia', 'Itália', 'Japão', 'Filipinas'],
        answer: 1,
      },
    ],
  },
  {
    img: 'http://1.bp.blogspot.com/-381V0f8BvTM/TauC65IUAaI/AAAAAAAAA8w/9s8EiRiz0Po/s1600/Caravelas.jpg',
    topic: 'História Portuguesa',
    questions: [
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/La_Rendici%C3%B3n_de_Granada_-_Pradilla.jpg/1200px-La_Rendici%C3%B3n_de_Granada_-_Pradilla.jpg',
        question: 'Que nome se dá à reconquista do território aos Muçulmanos?',
        options: [
          'Reconquista Muçulmana',
          'Reconquista Romana',
          'Reconsquista Cristã',
        ],
        answer: 3,
      },
      {
        img: 'https://ensina.rtp.pt/site-uploads/2021/09/Batlha-de-Alarcos-854x480.jpg',
        question:
          'Quem foram os dois cavaleiros que vieram ajudar os reis cristãos na luta contra os Muçulmanos?',
        options: [
          'D. Afonso Henriques e D. Raimundo',
          'D. Raimundo e D. Henrique',
          'Afonso VI e D. Raimundo',
        ],
        answer: 2,
      },
      {
        img: 'https://fotos.web.sapo.io/i/B98072217/20518373_A4dpd.jpeg',
        question: 'Quem foi o pai de D. Teresa?',
        options: [
          'D. Afonso VI de Leão',
          'D. Afonso VII de Leão e Castela',
          'D. Raimundo',
        ],
        answer: 1,
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Urraca_I_de_Le%C3%B3n_%28Ayuntamiento_de_Le%C3%B3n%29.jpg',
        question: 'D. Teresa e D. Urraca eram...',
        options: ['Primas', 'Cunhadas', 'Irmãs'],
        answer: 3,
      },
      {
        img: 'https://qph.fs.quoracdn.net/main-qimg-ba4f086beb3d1b896bf05aa26bb47168',
        question: 'A que reino pertencia o Condado Portucalense?',
        options: ['Reino de Castela', 'Reino de Leão', 'Reino de Aragão'],
        answer: 2,
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Henrique_o_Rei.jpg',
        question: 'Que obrigações tinha D. Henrique para com D. Afonso VI?',
        options: [
          'Obediência e apoio militar',
          'Obediência e apoio psicológico',
          'Apoio militar e assistência médica',
        ],
        answer: 1,
      },
      {
        img: 'https://pontedelimacultural.pt/upload/Gravura-de-Dom-Henrique-e-Dona-Teresa-TP.jpg',
        question: 'Quem eram os pais de D. Afonso Henriques?',
        options: [
          'D. Urraca e D. Raimundo',
          'D. Henrique e D. Urraca',
          'D. Henrique e D. Teresa',
        ],
        answer: 3,
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Alfonso_VII.jpg/200px-Alfonso_VII.jpg',
        question: 'O filho de D. Raimundo e D. Urraca era...',
        options: ['D. Afonso VII', 'D. Afonso Henriques', 'D. Afonso VI'],
        answer: 1,
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/D._Afonso_Henriques_O_Conquistador.jpg/640px-D._Afonso_Henriques_O_Conquistador.jpg',
        question: 'D. Afonso Henriques e D. Afonso VII eram...',
        options: ['Irmãos', 'Tio e Sobrinho', 'Primos'],
        answer: 3,
      },
      {
        img: 'https://www.obichinhodosaber.com/wp-content/uploads/2014/08/batalha-de-sao-mamede.png',
        question:
          'D. Afonso Henriques derrotou o exército de D. Teresa em que batalha?',
        options: [
          'Batalha de S. Mamede',
          'Batalha de Ourique',
          'Batalha de Cerneja',
        ],
        answer: 1,
      },
    ],
  },
  {
    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/most-popular-video-games-of-2022-1642612227.png?crop=1.00xw:1.00xh;0,0&resize=1200:*',
    topic: 'Video-jogos',
    questions: [
      {
        img: 'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png',
        question: 'Em que ano foi lançado o jogo Minecraft?',
        options: ['2010', '2011', '2012'],
        answer: 2,
      },
      {
        img: 'https://t.ctcdn.com.br/Fsso5cFdfzoIIrUg21Ey8-9kpWY=/1200x675/smart/filters:format(webp)/i465599.jpeg',
        question: 'Que empresa desenvolveu o jogo League of Legends?',
        options: ['Riot Games', 'Valve Corporation', 'Rockstar Games'],
        answer: 1,
      },
      {
        img: '',
        question: '',
        options: ['', ''],
        answer: 0,
      },
      {
        img: '',
        question: '',
        options: ['', ''],
        answer: 0,
      },
      {
        img: '',
        question: '',
        options: ['', ''],
        answer: 0,
      },
    ],
  },
];

export default quiz;
