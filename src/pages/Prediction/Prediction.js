import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import Switch from "../../components/Switch/Switch";
import Table from "../../components/Table/Table";
import MultiRangeSlider from '../../components/MultiRangeSlider/MultiRangeSlider';
import { useState, useEffect } from 'react';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
]

function Prediction(props) {
    const [filter, setFilter] = useState(false);
    function filterVisibility() {
        setFilter(!filter);
        console.log(filter);
    }
    const [map, changeMap] = useState('map1');
    function changeMapVisibility() {
        if (map == 'map1') {
            changeMap('map2')
        } else if (map == 'map2') {
            changeMap('map1')
        }
    }
    
    return (
        <>
            <Navbar />
            <MainWrapper>
                <UpperWrapper>
                    <AreaPlotWrapper>
                        <SwitchButtonWrapper>
                            <MapTitle>Map 1</MapTitle>
                            <Switch />
                        </SwitchButtonWrapper>
                        <ResponsiveContainer>
                            <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name">
                                <Label value="Time" fill="#F6C96F" offset={0} position="insideBottom" />
                            </XAxis>
                            <YAxis label={{ value: 'Rate', fill:"#F6C96F", angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#FFCA00" fill="rgba(246, 201, 111, 0.3)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </AreaPlotWrapper>
                    <InformationCard>
                        <InformationTitle>Information</InformationTitle>
                    </InformationCard>
                </UpperWrapper>
                <TableWrapper>
                    <FilterWrapper>
                        <FilterButton onClick={filterVisibility}>Filter</FilterButton>
                    </FilterWrapper>
                    <FilterOptions style={filter ? {display: 'flex'} : {display: 'none'}}>
                        <BR>
                            <div style={{width: '100%', paddingTop: '25.69px', paddingBottom: '25.69px'}}>
                                <p style={{fontWeight: '500', fontSize: '24px', marginBottom: '23px'}}>Burst time</p>
                                <MultiRangeSlider min={0} max={1000} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}/>
                            </div>
                            <div style={{width: '100%', paddingTop: '25.69px', paddingBottom: '25.69px'}}>
                                <p style={{fontWeight: '500', fontSize: '24px', marginBottom: '23px'}}>Rise time</p>
                                <MultiRangeSlider min={0} max={1000} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}/>
                            </div>
                        </BR>
                        <DP>
                            <div style={{width: '100%', paddingTop: '25.69px', paddingBottom: '25.69px'}}>
                                <p style={{fontWeight: '500', fontSize: '24px', marginBottom: '23px'}}>Burst time</p>
                                <MultiRangeSlider min={0} max={1000} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}/>
                            </div>
                            <div style={{width: '100%', paddingTop: '25.69px', paddingBottom: '25.69px'}}>
                                <p style={{fontWeight: '500', fontSize: '24px', marginBottom: '23px'}}>Rise time</p>
                                <MultiRangeSlider min={0} max={1000} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}/>
                            </div>
                        </DP>
                        <Classification>
                            <div style={{width: '100%', paddingTop: '25.69px', paddingBottom: '25.69px', display: 'flex', flexDirection: 'column'}}>
                                <p style={{fontWeight: '500', fontSize: '24px', marginBottom: '23px'}}>Classification</p>
                                <span style={{display: 'flex', flexDirection: 'row', gap: '17px'}}>
                                    <input type="checkbox" id="Option1" name="Option1" value="Option 1" style={{marginBottom: '24px', width: '24px', height: '24px'}} />
                                    <label for="Option1" style={{fontSize: '24px'}}>Parameter</label>
                                </span>
                                <span style={{display: 'flex', flexDirection: 'row', gap: '17px'}}>
                                    <input type="checkbox" id="Option2" name="Option2" value="Option 2" style={{marginBottom: '24px', width: '24px', height: '24px'}} />
                                    <label for="Option2" style={{fontSize: '24px'}}>Parameter</label>
                                </span>
                                <span style={{display: 'flex', flexDirection: 'row', gap: '17px'}}>
                                    <input type="checkbox" id="Option3" name="Option3" value="Option 3" style={{marginBottom: '24px', width: '24px', height: '24px'}} />
                                    <label for="Option3" style={{fontSize: '24px'}}>Parameter</label>
                                </span>
                                <span style={{display: 'flex', flexDirection: 'row', gap: '17px'}}>
                                    <input type="checkbox" id="Option4" name="Option4" value="Option 4" style={{marginBottom: '24px', width: '24px', height: '24px'}} />
                                    <label for="Option4" style={{fontSize: '24px'}}>Parameter</label>
                                </span>
                            </div>
                        </Classification>
                    </FilterOptions>
                    <TableMenu>
                        <p style={{color: '#F6C96F'}}>Burst start coordinate (x)</p>
                        <p style={{color: '#F6C96F'}}>Burst start coordinate (y)</p>
                        <p style={{color: '#F6C96F'}}>Burst peak coordinate (x)</p>
                        <p style={{color: '#F6C96F'}}>Burst peak coordinate (y)</p>
                        <p style={{color: '#F6C96F'}}>Burst end coordinate (x)</p>
                        <p style={{color: '#F6C96F'}}>Burst end coordinate (y)</p>
                        <p style={{color: '#F6C96F'}}>Total burst time</p>
                        <p style={{color: '#F6C96F'}}>Rise time</p>
                        <p style={{color: '#F6C96F'}}>Decay time</p>
                    </TableMenu>
                    <Table></Table>
                </TableWrapper>
            </MainWrapper>
        </>
    )
}

export default Prediction;

const MainWrapper = styled.div`
    width: 100vw;
    height: fit-content;
`
const UpperWrapper = styled.div`
    margin-left: 118px;
    margin-right: 118px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 64px;
`

const AreaPlotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:  center;
    width: 75%;
    height: 550px;
    background: rgba(237, 237, 237, 0.2);
    padding: 36px 49px;
    gap: 25px;
    border-radius: 18.56px;
`

const SimpleAreaChart = {
    width: '66.66%',
    height: '400px',
    padding: '10px'
}

const InformationCard = styled.div`
    width: 33.3%;
    height: 585px;
    background: rgba(237, 237, 237, 0.3);
    padding-top: 37px;
    padding-left: 29px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
`

const SwitchButtonWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const MapTitle = styled.div`
    font-size: 36px;
    font-weight: 500;
    color: #F6C96F;
`

const InformationTitle = styled.div`
    color: #F6C96F;
    font-size: 36px;
    font-weight: 500;
`

const TableWrapper = styled.div`
    margin-left: 120px;
    margin-right: 120px;
    margin-top: 36px;
`

const FilterWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
    margin-bottom: 36px;
`

const FilterButton = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 18px 20px;
    border-radius: 8px;
    background: #F6C96F;
    border: none;
    cursor: pointer;
    &:hover {
        /* border: 1px solid white; */
        background: #F6C96Fe1;
    }
`

const TableMenu = styled.div`
    background: rgba(237, 237, 237, 0.3);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 63px;
    padding: 26px 36px;
    border-radius: 12px;
    margin-bottom: 12px;
`

const FilterOptions = styled.div`
    height: fit-content;
    padding: 30px;
    display: flex;
    flex-direction: row;
    gap: 178px;
    justify-content: space-between;
    align-items: center;
    background: rgba(237, 237, 237, 0.3);
    margin-bottom: 77px;
    border-radius: 18.5px;
`

const BR = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 56.5px;
`
const DP = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 56.5px;
`
const Classification = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 56.5px;
    padding-right: 168px;
`
