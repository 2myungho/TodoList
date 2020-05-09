import React from 'react';
import styled from 'styled-components'
import Tab from './Tab'

const TemplateBlock = styled.div`
    width:500px;
    margin:150px auto 0;
    position:relative;
`

const Template = () => {
    return (
        <TemplateBlock>
            <Tab />
        </TemplateBlock>
    )
};

export default Template;