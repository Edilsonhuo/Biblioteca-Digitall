import React, {useState} from "react";
import {useNavigation} from '@react-navigation/native';
import { RefreshControl } from 'react-native';
// import { Header } from "react-native/Libraries/NewAppScreen";
import {
  Container,
  Scroller,
  Circle,
  HeaderArea,
  HeaderTitle,
  MenuBottom,
  HeaderSub,
  Text,
  LocationArea,

  Linha,
  Linha2, 
  Linha3, 

  LocationInput,
  LocationFinder,
  Historias,
  Historia1,
  Texte,

  //----Tecnologia-----
  Tecnologia,
  Texte1,
  Livro,
  Livro01,
  Livro1,
  Livro2,
  Livro3,
  Text2,
  Mais,


  //----Ciencias------
  Ciencias,
  Texte2,

  Livro_C,
  Livro_C1,
  Livro1C,
  Livro2C,
  Livro3C,
  Text1,
  Mais1,

  //---------Teologia----------
  Teologia,
  Texte3,

  Livro_T,
  Livro_T1,
  Livro1T,
  Livro2T,
  Livro3T,
  Text3,
  Mais2,

  // LoadingIcon
} from './styles';

import Menu from '../../assets/icons-menu.svg';
import MyLocationIcon from '../../assets/icons-search.svg';
import Filter from '../../assets/icons-filter.svg';

//-----------Livros-----------

import Tecno1 from '../../assets/Tech book.svg'
import Tecno2 from '../../assets/Tech book.svg'
import Tecno3 from '../../assets/Tech2 book.svg'
//---------------------------------------------
import Tecno4 from '../../assets/Tech book.svg';
import Tecno5 from '../../assets/Tech2 book.svg';
import Tecno6 from '../../assets/Tech book.svg';
//-----------Fim------------------

//-------------Livros Ciencias------------
import Science from '../../assets/Tech2 book.svg'
import Science1 from '../../assets/Tech book.svg'
import Science2 from '../../assets/Tech book.svg';
//----------------------------------------------
import Science3 from '../../assets/Tech book.svg';
import Science4 from '../../assets/Tech book.svg';
import Science5 from '../../assets/Tech2 book.svg';
//----------Fim----------------------------------


//------------Livros Teologia----------

import Teolo from '../../assets/Tech book.svg'
import Teolo1 from '../../assets/Tech2 book.svg'
import Teolo2 from '../../assets/Tech book.svg'
//---------------------------------------------
import Teolo3 from '../../assets/Tech2 book'
import Teolo4 from '../../assets/Tech book.svg'
import Teolo5 from '../../assets/Tech book.svg'



export default () => {

    const navigation = useNavigation();

    const [refreshing, setRefreshing] = useState(false)


    const onRefresh = () =>{

    }
    return (
      <Container>
        <Circle
          RefreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }></Circle>
        <Scroller
          RefreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <HeaderArea>
            <HeaderTitle>Biblioteca Digital</HeaderTitle>
            <MenuBottom>
              <Menu width="29" height="29" />
            </MenuBottom>
          </HeaderArea>

          <HeaderSub font-size="28px">
            <Text font-size="28px">Busque por mais obras e</Text>
            <Text font-size="28px">desfrute do saber.</Text>
          </HeaderSub>

          <LocationArea>
            <LocationInput
              placeholder="search"
              placeholderTextColor="#000"
              onPress={() => navigation.navigate('search')}
            />

            <LocationFinder>
              <MyLocationIcon width="24" height="24" />
            </LocationFinder>
          </LocationArea>

          <Linha></Linha>

          <Historias>
            <Texte>Categorias</Texte>
            <Historia1>
              <Filter width="28px" height="28px" />
            </Historia1>
          </Historias>
          {/* <LoadingIcon size="large" color="#000" /> */}

          <Tecnologia>
            <Texte1>Tecnologia</Texte1>

            <Livro>
              <Livro1 onPress={() => navigation.navigate('detatlheLivro')}>
                <Tecno1 width="100px" height="140px" />
                <Text>Tic`s</Text>
              </Livro1>

              <Livro2>
                <Tecno2 width="100px" height="140px" />
                <Text>Java</Text>
              </Livro2>

              <Livro3>
                <Tecno3 width="100px" height="140px" />
                <Text>Python</Text>
              </Livro3>
            </Livro>

            <Livro01>
              <Livro1>
                <Tecno4 width="100px" height="140px" />
              </Livro1>

              <Livro2>
                <Tecno5 width="100px" height="140px" />
              </Livro2>

              <Livro3>
                <Tecno6 width="100px" height="140px" />
              </Livro3>
            </Livro01>
            <Mais>
              <Text2>Ver Mais...</Text2>
            </Mais>
          </Tecnologia>

          <Linha2></Linha2>

          <Ciencias>
            <Texte2>Ciencias</Texte2>

            <Livro_C>
              <Livro1C>
                <Science width="100px" height="140px" />
              </Livro1C>

              <Livro2C>
                <Science1 width="100px" height="140px" />
              </Livro2C>

              <Livro3C>
                <Science2 width="100px" height="140px" />
              </Livro3C>
            </Livro_C>

            <Livro_C1>
              <Livro1C>
                <Science3 width="100px" height="140px" />
              </Livro1C>

              <Livro2C>
                <Science4 width="100px" height="140px" />
              </Livro2C>

              <Livro3C>
                <Science5 width="100px" height="140px" />
              </Livro3C>
            </Livro_C1>
            <Mais1>
              <Text1>Ver Mais...</Text1>
            </Mais1>
          </Ciencias>

          <Linha3></Linha3>

          <Teologia>
            <Texte3>Teologia</Texte3>

            <Livro_T>
              <Livro1T>
                <Teolo width="100px" height="140px" />
              </Livro1T>

              <Livro2T>
                <Teolo1 width="100px" height="140px" />
              </Livro2T>

              <Livro3T>
                <Teolo2 width="100px" height="140px" />
              </Livro3T>
            </Livro_T>

            <Livro_T1>
              <Livro1T>
                <Teolo3 width="100px" height="140px" />
              </Livro1T>

              <Livro2T>
                <Teolo4 width="100px" height="140px" />
              </Livro2T>

              <Livro3T>
                <Teolo5 width="100px" height="140px" />
              </Livro3T>
            </Livro_T1>
            <Mais2>
              <Text3>Ver Mais...</Text3>
            </Mais2>
          </Teologia>
        </Scroller>
      </Container>
    );
}