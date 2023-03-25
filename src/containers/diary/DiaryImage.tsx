import React from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import Text from '@/components/common/Text';
import { DiaryImage } from '@/types/Diary';

const DiaryImage = ({ images }: { images: DiaryImage[] }) => {
    return (
        <Carousel width={'100vw'} showStatus={false} showArrows={false}>
            {images.map(image => {
                return (
                    <WineTagWrapper key={image.url}>
                        {image.tags.map(tagedWine => {
                            return (
                                <>
                                    <WineTag key={tagedWine.id} x={tagedWine.x} y={tagedWine.y}>
                                        <Text 
                                            size="xxs"
                                            weight="regular"
                                            color="white"
                                            style={{ 
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {tagedWine.wine.name}
                                        </Text>
                                    </WineTag>
                                    <WineTagTriangle x={tagedWine.x} y={tagedWine.y} />
                                </>
                            )
                        })}
                        <Image src={image.url} width='100vw' height='100vw' layout="responsive" alt="diary-image" />
                    </WineTagWrapper>
                )
            })}
        </Carousel>
    );
};

const WineTagWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vw;
`;

const WineTag = styled.div<{ x: number; y: number }>`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: ${({ x }) => `${x}px`};
    top: ${({ y }) => `${y}px`};

    width: 132px;
    height: 30px;
    z-index: 3;
    padding: 8px;
    border-radius: 9px;
    background-color: black;
`;

const WineTagTriangle = styled.div<{ x: number; y: number }>`
    position: absolute;
    left: ${({ x }) => `${x + 44}px`};
    top: ${({ y }) => `${y + 20}px`};

    width: 0;
    height: 0;
    border-top: 17px solid black;
    border-bottom: 17px solid transparent;
    border-left: 22px solid transparent;
    border-right: 22px solid transparent;
    z-index: 2;
`;

export default DiaryImage;
