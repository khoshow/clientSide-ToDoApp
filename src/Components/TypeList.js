import './Todolist.css'
import React from 'react'
import CheckIcon from '@material-ui/icons/Check'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'
import axios from 'axios'
import { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

function TypeList(props) {

    const types = props.types.map((a, index) => {
        return <ListGroup.Item>{a.typeTitle}</ListGroup.Item>
    })

    return (
        <div className='tasklist'>
            <ListGroup variant="flush">
                {types}

            </ListGroup>
        </div>
    )
}

export default TypeList