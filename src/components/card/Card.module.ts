import styled from 'styled-components'

export const CardContainer = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
`
export const CardHeader = styled.div`
    h2 {
        font-size: 1.5rem;
        line-height: 2.5rem;
        text-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    }
`
export const CardBody = styled.div`
    display: flex;
    align-items: center;
`