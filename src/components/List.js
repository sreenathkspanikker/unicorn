import React, { useState, useEffect } from 'react'
import { Button, ListGroup, ButtonGroup } from 'react-bootstrap'

export const List = props => {

    const [state, setstate] = useState([])

    useEffect(() => {
        let isLoaded = true
        if (isLoaded && props.data !== undefined ) setstate(props.data)
        return () => {
            isLoaded = false
        }
    }, [props])


    const handleClick = (e, key) =>  props.handleClick(e, key)

    return (
        <ListGroup>
            {state.map((items, i)=>{
                return(
                <ListGroup.Item key={i}>
                    <p>
                        <strong>{items.name}</strong>
                        <small>{items.value}</small>
                    </p>
                    <ButtonGroup>
                        <Button onClick={() => handleClick(items, 'add')} variant="primary" >+</Button>
                        <Button onClick={() => handleClick(items, 'remove')} variant="primary">-</Button>
                    </ButtonGroup>
                </ListGroup.Item>
                )
            })}
            
        </ListGroup>
    )
}
