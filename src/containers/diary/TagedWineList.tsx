import React from 'react'
import Image from 'next/image';
import styled from 'styled-components';

import Text from '@/components/common/Text';
import { Tag } from '@/types/Diary';
import { FLAG_BY_COUNTRY } from '@/constants/countryFlag';
import { NAME_BY_WINE_TYPE } from '@/constants/wineType';

const TagedWineList = ({ tagedWineList }: { tagedWineList: Tag[] }) => {
    const setStartShape = (v: number, wineInfo: any) => {
        if (v <= wineInfo.wineRate.rate) return "/images/ic_star_full.png";
        else {
            if (wineInfo.wineRate.rate - (v - 1) > 0) return "/images/ic_star_half.png";
            else return "/images/ic_star_empty.png";
        };
    }

    return (
        <TagedWineListWrapper>
            {tagedWineList.map(wineInfo => {
                return (
                    <WineExplainWrapper key={wineInfo.id}>
                        <WineInfoWrapper>
                            <div style={{ minWidth: '42px', minHeight: '78px' }}>
                                <Image src={wineInfo.wine.image} width={42} height={78} alt="wine" />
                            </div>
                            <div style={{ marginLeft: '26px' }}>
                                <WineNameWrapper>
                                    <span>{FLAG_BY_COUNTRY[wineInfo.wine.country]}</span>
                                    <Text size="xxs" weight="regular">{wineInfo.wine.country}</Text>
                                    <Divider />
                                    <Text size="xxs" weight="regular">{NAME_BY_WINE_TYPE[wineInfo.wine.type]}</Text>
                                </WineNameWrapper>
                                <div style={{ height: '6px' }} />
                                <div style={{ width: '196px', whiteSpace: 'pre-wrap' }}>
                                    <Text size="xxs" weight="extrabold" color="">{wineInfo.wine.enName}</Text>
                                </div>
                                <div style={{ height: '6px' }} />
                                <RateWrapper>
                                    <div>
                                        {[1, 2, 3, 4, 5].map((v => { return <Image key={v} src={setStartShape(v, wineInfo)} width={16} height={16} alt='star' /> }))}
                                    </div>
                                    <div>
                                        <Text size="xxs" weight="extrabold">{wineInfo.wineRate.rate}</Text>
                                    </div>
                                </RateWrapper>
                            </div>
                        </WineInfoWrapper>
                        <div style={{ height: '16px' }} />
                        <div style={{ width: '258px', whiteSpace: 'pre-wrap' }}>
                            <Text size="xs" weight="regular" lineHeight="lg">{wineInfo.wineRate.content}</Text>
                        </div>
                    </WineExplainWrapper>
                )
            })}
        </TagedWineListWrapper>
    );
};

const TagedWineListWrapper = styled.span`
    display: flex;
    align-items: center;
    overflow: auto;
    white-space: nowrap;
    gap: 14px;
    padding: 0 24px 0 24px;
    height: 300px;
`;

const WineExplainWrapper = styled.div`
    min-width: 298px;
    height: 222px;
    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    padding: 18px 20px 0 20px;
    background-color: #ffffff;
`;

const WineInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const WineNameWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6px;
`;

const Divider = styled.div`
    width: 1px;
    height: 10px;
    background-color: #cccccc;
`;

const RateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
`;

export default TagedWineList;