import React from 'react';
import styled from 'styled-components';

import Text from "@/components/common/Text";
import { dateToDateWithKoreanUnit } from "@/utils/constants/format";
import { Diary } from '@/types/Diary';


const DiaryContent = ({ diaryData }: { diaryData: Diary }) => {
    return (
        <Container>
            <Text size="x2l" weight="extrabold" color="gray900" lineHeight="base" >{diaryData.title}</Text>
            <div style={{ height: '11px'}} />
            <Text size="xs" weight="regular" color="gray500" lineHeight="base">{dateToDateWithKoreanUnit(diaryData.date)}</Text>
            <div style={{ height: '38px'}} />
            <Divdier />
            <div style={{ height: '36px'}} />
            <Text size={16} weight="regular" color="gray700" lineHeight="base">{diaryData.content}</Text>
        </Container>
    )
};

const Container = styled.div`
    padding-left: 24px;
`;

const Divdier = styled.div`
    width: calc(100vw - 48px);
    height: 1px;
    background-color: #f1f1f1;
`;


export default DiaryContent;
