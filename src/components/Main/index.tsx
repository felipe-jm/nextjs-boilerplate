import { Wrapper, Logo, Title, Description } from './styles';

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'Typescript, React.js, Next.js and Styled Components'
}) => (
  <Wrapper>
    <Logo src="/img/nextjs.png" alt="Next.js Logo in the screen center" />

    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
);

export default Main;
