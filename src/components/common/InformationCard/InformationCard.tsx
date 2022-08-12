import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.color ? 'props.color' : 'rgb(249, 249, 252)'};
  border-radius: 30px;
  flex-direction: column;
  padding: 15px;
  transition: 200ms;
  width: 350px;

  :hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px rgb(226, 227, 233);
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  overflow-wrap: break-word;
  width: 100%;
`;

const Title = styled.span`
  color: rgb(88, 67, 228);
  font-size: 22px;
  font-weight: bold;
  width: 100%;
  word-wrap: break-word;
`;

const Detail = styled.span`
  color: rgb(88, 67, 228);
  font-size: 22px;
  font-weight: normal;
  padding: 5px;
  width: 258px;
  word-wrap: break-word;
`;

const Image = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
`;

type Props = {
  title: string;
  details: string;
  picture: string;
};

const InformationCard: FC<Props> = ({ details, title, picture }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <DetailWrapper>
        <Image src={picture} />
        <Detail>{details}</Detail>
      </DetailWrapper>
    </Wrapper>
  );
};

export default InformationCard;
