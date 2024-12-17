import { Link } from 'react-router-dom';
import GoShopButton from '../GoShopButton';
import { HomePageContainer, HomePageImage, TextContent, Title, Description } from '../../styles/HomePage.styles';



export default function HomePage() {
  return (
    <HomePageContainer>
      <HomePageImage src="" alt="someImage" />
      <TextContent>
        <Title>Name of the store</Title>
        <Description>Little description, slogan, whatever</Description>
      </TextContent>
      <Link to="/store">
        <GoShopButton />
      </Link>
    </HomePageContainer>
  );
}
