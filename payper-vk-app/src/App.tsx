import * as React from 'react';
import Header from './Header';
import { Box } from 'grommet';
import BottomNavBar from './BottomNavBar';
import './App.css'
import CurrentPage from './containers/CurrentPage/CurrentPage';

export default class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <div className='main'>
          <Box fill='vertical' background={{
            "color": "neutral-1",
            "opacity": 'weak'
          }}>
            <CurrentPage />
          </Box>
        </div>
        <BottomNavBar />
      </div>
    );
  }
}

/*       <div className="App">
        <Edition title='Бумага' 
        description="Когда-то мы придумали еженедельное письмо для читателей, в котором редакторы по-дружески рассказывают о самых интересных делах, которыми можно заняться в Петербурге на выходных."
        subscriptions={[{title: "", description: "Три письма: о вине, петербургских домах и искусстве — по цене двух подписок", isPayed: false, price: 101, id: "1"},
        {title: "Бесплатная подписка", description: "Неинформативное описание", isPayed: false, id:"2"},
        {title: "Подписка для отписки", description: "Неинформативное описание", isPayed: true, price: 101, id:"2"}]}
        />
      </div> */