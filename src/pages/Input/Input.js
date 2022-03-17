import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import CloudComputing from './Octicons-cloud-upload.svg';

function Input() {
    const [selectedFile, setSelectedFile] = useState(null);
    function onFileChange(event) {
        setSelectedFile( selectedFile= event.target.files[0] );
    };
    function onFileUpload() {
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            'myFile',
            selectedFile,
            selectedFile.name
        )

        // Details of the uploaded file
        console.log(selectedFile);

        // Sending data to backend
        axios.post('/api/upload', formData)
    }
    function fileData() {
        if (selectedFile) {
            return (
                <h1>Uploaded!<br />Details: {selectedFile}</h1>
            )
        } else {
            return (
                console.log('No file selected')
            )
        }
    }
    return (
        <>
            <Navbar />
            <InputWrapper>
                <InputData>Input Data</InputData>
                <InputBoxWrapper>
                    <InputBox type='file' onChange={onFileChange} />
                    <CloudIcon src={CloudComputing}/>
                </InputBoxWrapper>
                <IconButtonWrapper>
                    <InputButton onClick={onFileUpload}>Upload</InputButton>
                </IconButtonWrapper>
            </InputWrapper>
            {fileData()}
        </>
    )
}

export default Input;

const InputWrapper = styled.div`
    width: fit-content;
    margin-left: 120px;
    background: rgba(237, 237, 237, 0.2);
    height: fit-content;
    display:  flex;
    flex-direction: column;
    gap: 65px;
    padding: 30px;
    border-radius: 12px;
`
const InputData = styled.div`
    font-size: 32px;
    color: #F6C96F;
`

const InputBoxWrapper = styled.div`
    background: rgba(237, 237, 237, 0.2);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:  center;
    width: 469px;
    height: 64px;
    padding-left: 16px;
    padding-right: 16px;
`;

const CloudIcon = styled.img`
    width: 14px;
    height: 17px;
`

const InputBox = styled.input`
    width: 469px;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
`

const IconButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const InputButton = styled.button`
    font-family: inherit;
    background: #F6C96F;
    border-radius: 8px;
    border: none;
    width: 86px;
    height: 56px;
    cursor: pointer;
    &:hover {
        border: 2px solid #fff;
    }
`