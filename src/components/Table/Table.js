import React from 'react';
import styled from 'styled-components';

function Table () {
    return (
        <>
            {/* <TableWrapper>
                <BurstStartX>{props.BSX}</BurstStartX>
                <BurstStartY>{props.BSY}</BurstStartY>
                <BurstPeakX>{props.BPX}</BurstPeakX>
                <BurstPeakY>{props.BPY}</BurstPeakY>
                <BurstEndX>{props.BEX}</BurstEndX>
                <BurstEndY>{props.BEY}</BurstEndY>
                <TotalBurstTime>{props.TBT}</TotalBurstTime>
                <RiseTime>{props.RT}</RiseTime>
                <DecayTime>{props.DT}</DecayTime>
            </TableWrapper> */}
            <TableWrapper>
                <BurstStartX>Test</BurstStartX>
                <BurstStartY>Test</BurstStartY>
                <BurstPeakX>Test</BurstPeakX>
                <BurstPeakY>Test</BurstPeakY>
                <BurstEndX>Test</BurstEndX>
                <BurstEndY>Test</BurstEndY>
                <TotalBurstTime>Test</TotalBurstTime>
                <RiseTime>Test</RiseTime>
                <DecayTime>Test</DecayTime>
            </TableWrapper>
        </>
    )
}

export default Table;

const TableWrapper = styled.div`
    background: rgba(237, 237, 237, 0.2);
    padding: 26px 36px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 63px;
    border-radius: 12px;
`

const BurstStartX = styled.p`
    font-size: 1rem;
`

const BurstStartY = styled.p`
    font-size: 1rem;
`

const BurstPeakX = styled.p`
    font-size: 1rem;
`

const BurstPeakY = styled.p`
    font-size: 1rem;
`

const BurstEndX = styled.p`
    font-size: 1rem;
`

const BurstEndY = styled.p`
    font-size: 1rem;
`

const TotalBurstTime = styled.p`
    font-size: 1rem;
`

const RiseTime = styled.p`
    font-size: 1rem;
`

const DecayTime = styled.p`
    font-size: 1rem;
`
