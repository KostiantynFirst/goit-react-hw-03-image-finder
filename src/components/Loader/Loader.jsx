import { Dna } from 'react-loader-spinner';
import { SpinerContainer } from './Loader.styled';

export default function Spiner() {
  return (
    <SpinerContainer>
      <Dna color="#3f51b5" height={200} width={200} />
    </SpinerContainer>
  );
}