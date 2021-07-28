import styled from 'styled-components';

export const Span = styled.span``;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0rem 5rem;
  background-color: #eee;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`;

export const Heading = styled.h3`
  z-index: 2;
  font-size: 4rem;
  color: #eee;
  font-weight: 900;
  transition: all 0.35s ease;
  &::after {
    content: ']';
  }
  &::before {
    content: '[';
  }
`;

export const List = styled.div`
  z-index: 1;
  mix-blend-mode: difference;
  width: 50%;
  &:hover ${Heading} {
    opacity: 0.1;
  }
`;

export const ItemWrapper = styled.div`
  display: inline-block;
  margin-right: 1.25rem;
  margin-bottom: 1.25rem;
  cursor: pointer;
  transition: all 0.35s ease;

  &:last-of-type {
    margin-right: 0rem;
  }

  &:hover ${Heading} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  opacity: ${({ active }) => (active ? '1' : '0')};
  position: absolute;
  width: auto;
  height: auto;
  max-height: 50%;
  max-width: 60%;
  object-fit: contain;
  pointer-events: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const MediaContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;