import React from "react";
import styled from "styled-components";

function Table(props) {
  console.log(Object.keys(props.props.start_coordinate__x_).length);
  var indents = [];
  for (
    var i = 0;
    i < Object.keys(props.props.start_coordinate__x_).length;
    i++
  ) {
    indents.push(
      <TableWrapper style={{width: 'fit-content'}}>
        <BurstStartX>{props.props.start_coordinate__x_[`${i}`]}</BurstStartX>
        <BurstStartY>{props.props.start_coordinate__y_[`${i}`]}</BurstStartY>
        <BurstPeakX>{props.props.peak_coordinate__x_[`${i}`]}</BurstPeakX>
        <BurstPeakY>{props.props.peak_coordinate__y_[`${i}`]}</BurstPeakY>
        <BurstEndX>{props.props.end_coordinate__x_[`${i}`]}</BurstEndX>
        <BurstEndY>{props.props.end_coordinate__y_[`${i}`]}</BurstEndY>
        <TotalBurstTime>{props.props.total_burst_time[`${i}`]}</TotalBurstTime>
        <RiseTime>{props.props.rise_time[`${i}`]}</RiseTime>
        <DecayTime>{props.props.decay_time[`${i}`]}</DecayTime>
        <DecayTime>{props.props.classfication_by_area[`${i}`]}</DecayTime>
        <DecayTime>{props.props.classification_by_duration[`${i}`]}</DecayTime>
      </TableWrapper>
    );
  }
  return indents;
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
  margin-bottom: 12px;
`;

const BurstStartX = styled.p`
  width: 150px;
  font-size: 1rem;
`;

const BurstStartY = styled.p`
  width: 150px;
  font-size: 1rem;
`;

const BurstPeakX = styled.p`
  width: 150px;
  font-size: 1rem;
`;

const BurstPeakY = styled.p`
  width: 150px;
  font-size: 1rem;
`;

const BurstEndX = styled.p`
  width: 150px;
  font-size: 1rem;
`;

const BurstEndY = styled.p`
  width: 150px;
  font-size: 1rem;
`;

const TotalBurstTime = styled.p`
  width: 150px;
  font-size: 1rem;
`;

const RiseTime = styled.p`
  width: 150px;
  font-size: 1rem;
`;

const DecayTime = styled.p`
  width: 150px;
  font-size: 1rem;
`;
