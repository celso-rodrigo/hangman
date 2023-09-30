import styled from 'styled-components';

const Gallows = styled.div`
  background-color: ${(props) => props.theme.color};
`;

export const HangmanRope = styled(Gallows)`
  height: 50px;
  width: 10px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const HangmanTop = styled(Gallows)`
  height: 10px;
  width: 200px;
  margin-left: 120px;
`;

export const HangmanPilar = styled(Gallows)`
  height: 400px;
  width: 10px;
  margin-left: 120px;
`;

export const HangmanBase = styled(Gallows)`
  height: 10px;
  width: 250px;
`;

export const HangmanHead = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 10px solid ${(props) => props.theme.color};;
  position: absolute;
  top: 50px;
  right: -30px;
`;

export const HangmanBody = styled.div`
  width: 10px;
  height: 110px;
  background-color: ${(props) => props.theme.color};
  position: absolute;
  top: 110px;
  right: 0;
`;

const HangmanArm = styled.div`
  width: 80px;
  height: 10px;
  background-color: ${(props) => props.theme.color};
  position: absolute;
  top: 140px;
`;

export const HangmanLeftArm = styled(HangmanArm)`
  right: 0;
  rotate: -40deg;
  transform-origin: right bottom;
`;

export const HangmanRightArm = styled(HangmanArm)`
  right: -70px;
  rotate: 40deg;
  transform-origin: left bottom;
`;

const HangmanLeg = styled.div`
  width: 100px;
  height: 10px;
  background-color: ${(props) => props.theme.color};
  position: absolute;
  top: 210px;
`;

export const HangmanLeftLeg = styled(HangmanLeg)`
  right: 0px;
  rotate: -60deg;
  transform-origin: right bottom;
`;

export const HangmanRightLeg = styled(HangmanLeg)`
  right: -90px;
  rotate: 60deg;
  transform-origin: left bottom;
`;