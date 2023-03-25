import React from "react";
import styled from "styled-components";

import DiaryImage from "@/containers/diary/DiaryImage";
import DiaryContent from "@/containers/diary/DiaryContent";
import TagedWineList from "@/containers/diary/TagedWineList";
import { requestDiary } from "@/remotes/requester";

const DiaryPage = ({ diaryData }) => {
    let tagedWineList = [];
    diaryData.images.map(image => tagedWineList.push(...image.tags));

    return (
        <Container>
            <DiaryImage images={diaryData.images} />
            <DiaryContent diaryData={diaryData} />
            <div style={{ height: '59px'}} />
            <TagedWineList tagedWineList={tagedWineList} />
            <div style={{ height: '59px'}} />
        </Container>
    );
}

export async function getServerSideProps(context) {
    const diaryId = context.query.id;
    const diaryData = await requestDiary(diaryId);

    return {
        props: {
            diaryData,
        },
    };
}

const Container = styled.div`
    width: 100%;
`;

export default DiaryPage;
