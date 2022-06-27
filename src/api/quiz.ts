const quiz = [
  {
    img: 'https://bordalo.observador.pt/v2/rs:fill:900/c:770:433:nowe:0:0/q:86/plain/https://s3.observador.pt/wp-content/uploads/2016/07/04200958/inteligencia_770x433_acf_cropped.jpg',
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
        img: 'https://s2.glbimg.com/iglqzieWmOf0BDharvafgqcpALk=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/b/p/6KBtpEQsAB4AU3XKddAA/dota-2-1.jpg',
        question: 'Dota 2 não existe para que plataforma?',
        options: ['Linux', 'Android', 'macOS'],
        answer: 2,
      },
      {
        img: 'https://lh3.googleusercontent.com/9wxn2nMc00RgEXse8tlwLsONidrbTr3JrTicZT039nawCCcYHYx4qQZrfUDsOPe-9eYucTWcXU0EAg_krMujtL06',
        question: 'Elden Ring é um jogo FPS (First-Person-Shooter)',
        options: ['Verdadeiro', 'Falso'],
        answer: 2,
      },
      {
        img: 'https://t2.tudocdn.net/580408?w=646&h=284',
        question: 'Que jogo ganhou o prémio "Jogo do Ano" em 2016?',
        options: ['Minecraft', 'Resident Evil Village', 'Overwatch'],
        answer: 3,
      },
      {
        img: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg',
        question:
          'The Legend of Zelda (Breath of the Wild) é um jogo multi-plataformas.',
        options: ['Verdadeiro', 'Falso'],
        answer: 2,
      },
      {
        img: 'https://i0.wp.com/www.otakupt.com/wp-content/uploads/2021/11/the-game-awards-2021-logo.jpg?fit=1280%2C720&ssl=1',
        question:
          'Que jogo ganhou o prémio de melhor jogo para mobile em 2021?',
        options: [
          'Pokemón Unite',
          'Genshin Impact',
          'MARVEL Future Revolution',
        ],
        answer: 2,
      },
      {
        img: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg',
        question: 'Apex Legends é um jogo de tipo...',
        options: ['FPS', 'RPG', 'OPEN WORLD'],
        answer: 1,
      },
      {
        img: 'https://xboxplay.games/uploadStream/17304.jpg',
        question: 'Honkai Impact 3rd é um jogo restrito apenas para mobile.',
        options: ['Verdadeiro', 'Falso'],
        answer: 2,
      },
      {
        img: 'https://www.esportznetwork.com/wp-content/uploads/2020/11/The-Esports-Awards-2020-Winners-Esportz-Network.jpg',
        question: 'Que jogo ganhou o prémio de melhor jogo de Esports em 2020?',
        options: [
          'League of Legends',
          'Fortnite',
          'Call of Duty: Modern Warfare',
        ],
        answer: 1,
      },
    ],
  },
  {
    img: 'https://i.pinimg.com/originals/20/18/be/2018be28b40374a2b2dc6f741abf84a5.jpg',
    topic: 'Anime',
    questions: [
      {
        img: 'https://cdn.europosters.eu/image/750/posters/death-note-collage-i28406.jpg',
        question: 'Quem é que morreu em Death Note?',
        options: ['Light', 'L', 'Pai do Light', 'Todos os anteriores'],
        answer: 4,
      },
      {
        img: 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2021/03/attack-on-titan.jpg',
        question: 'Como é que o Eren Yeager morreu em Shingeki no Kyojin',
        options: ['Decapitado', 'Esmagado', 'Devorado'],
        answer: 1,
      },
      {
        img: 'https://i0.wp.com/semprefuigeek.com.br/wp-content/uploads/2022/04/One-Piece-gostaria-de-ter-apresentado-uma-historia-de-amor-para-Ace.jpg?fit=1600%2C850&ssl=1',
        question: 'Quem é o pai do Ace em One Piece?',
        options: ['Gol. D Roger', 'Monkey. D Garp', 'Barba Branca'],
        answer: 1,
      },
      {
        img: 'https://s.aficionados.com.br/imagens/30-personagens-de-animes-mais-poderosos-de-todos-os-tempos_f.jpg',
        question: 'Quem é o personagem com mais protagonismo no geral?',
        options: ['Naruto', 'Natsu', 'Kazuma'],
        answer: 2,
      },
      {
        img: 'https://img.quizur.com/f/img62b7b8879cd9a7.80429314.jpg?lastEdited=1656207498',
        question: 'Qual o nome dos pais de sangue da Anya?',
        options: [
          'Não foi revelado por enquanto',
          'Ohato e Norata',
          'Xanemi e Okami',
        ],
        answer: 1,
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8O3ozK4s5wPEm29EJMBvfJfCb6UxPgBO-apIstiCgK3PVaOsIkiNFLRMw2qqzH1ALBs&usqp=CAU',
        question: 'Quem morre em Tokyo Revengers',
        options: ['Baji', 'Emmna', 'Draken', 'Todos os anteriores'],
        answer: 4,
      },
      {
        img: 'https://rollingstone.uol.com.br/media/uploads/one-piece-live-action-series-seemingly-coming-to-netflix_1fcz.h720.jpg',
        question: 'Quem é o criador de One Piece?',
        options: ['Eiichiro Oda', 'Masashi Kishimoto', 'Koyoharu Gotouge'],
        answer: 2,
      },
      {
        img: 'https://as01.epimg.net/meristation_en/imagenes/2022/04/21/news/1650502649_880140_1650503074_noticia_normal.jpg',
        question: 'Qual o sobrenome de Naruto?',
        options: ['Shippuden', 'Uzumaki', 'Namikazi'],
        answer: 2,
      },
      {
        img: 'https://criticalhits.com.br/wp-content/uploads/2019/02/tobi-uchiha-obito-32599615-1280-720.jpg',
        question: 'Quem é o Tobi?',
        options: ['Obito ', 'Madara', 'Sasuke'],
        answer: 1,
      },
      {
        img: 'https://i2.wp.com/heroisx.com/wp-content/uploads/2012/02/another_anime.jpg',
        question: 'Quem é o morto em Another?',
        options: ['Mei Misaki', 'Kouichi Sakakibara', 'Tomohiko Kazami'],
        answer: 1,
      },
    ],
  },
];

export default quiz;
