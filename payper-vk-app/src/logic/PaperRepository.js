import paper from '../img/paper.jpg'
import lentach from '../img/lentach.jpg'
import kokokotlin from '../img/kokokotlin.jpg'
import meme from '../img/meme.jpg'
import orange from '../img/orange.jpg'
import sharePOP from '../img/sharePOP.png'
import wine from '../img/wine.png'

const publishersTileData = [
  {
    id: 1,
    img: paper,
    title: 'Бумага',
    author: 'paper',
  },
  {
    id: 2,
    img: lentach,
    title: 'Лентач',
    author: 'lentach'
  },
  {
    id: 3,
    img: meme,
    title: 'Meme piper',
    author: 'meme',
  },
  {
    id: 3,
    img: kokokotlin,
    title: 'Kokokotlin',
    author: 'kokokotlin',
  },
  {
    id: 4,
    img: orange,
    title: 'Orange panda',
    author: 'orange',
  }
];

const categoryTileData = [
  {
    title: 'Лентач',
  },
  {
    title: 'Бумага',
  },
  {
    title: 'Meme piper',
  },
  {
    title: 'Kokokotlin',
  },
  {
    title: 'Orange panda',
  }
];

const sharesTileData = [
  {
    img: sharePOP
  },
  {
    img: wine
  },
  {
    img: sharePOP
  },
  {
    img: sharePOP
  },
  {
    img: sharePOP
  }
];

const profileContent = {
  email : 'vortmanmax@gmail.com',
  publishers :[
    {
      title : 'Бумага',
      shares : [
        {
          period: 'Еженедельная бесплатная рассылка',
          description: 'Что интересного на ближайших выходных в Петербурге?'
        },
        {
          period: 'Еженедельная, 150 руб в месяц',
          description: 'Ищете хорошее вино за разумные деньги? Мы нашли его для вас'
        }
      ]
    },
    {
      title : 'Лентач',
      shares : [
        {
          period: 'Еженедельная бесплатная рассылка',
          description: 'Что интересного на ближайших выходных в Петербурге?'
        },
        {
          period: 'Еженедельная, 150 руб в месяц',
          description: 'Ищете хорошее вино за разумные деньги? Мы нашли его для вас'
        }
      ]
    }
  ],
}

export { publishersTileData, categoryTileData, sharesTileData, profileContent }