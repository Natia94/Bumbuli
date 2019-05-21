import React from 'react'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'

const ArticleForm =  (props) => {
    const handleSubmit = props.handleSubmit
    const handleChange = props.handleChange

    const name = props.name
    const email = props.email
    const title = props.title
    const tags = props.tags
    const content = props.content

    return (
        <Form onSubmit={handleSubmit} className = "container">
            <Form.Group controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control  
                    type="text" placeholder="Enter Name" 
                    name="name"
                    onChange = {handleChange}
                    value = {name}
                />
            
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control  
                    
                    type="email" placeholder="Enter Password" 
                    name="email"
                    onChange = {handleChange}
                    value = {email}
                />
            </Form.Group>

            <Form.Group controlId="formGroupTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control  
                    type="text" placeholder="Enter Title" 
                    name="title"
                    onChange = {handleChange}
                    value = {title}
                />
            </Form.Group>
            <Form.Group controlId="formGroupTags">
                <Form.Label>Tags</Form.Label>
                <Form.Control  
                    type="text" placeholder="Enter Tags" 
                    name="tags" 
                    onChange = {handleChange}
                    value = {tags}
                />
            </Form.Group>
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows="10" 
                    type="text"
                    name="content"
                    onChange = {handleChange}
                    value = {content}
                />
            </Form.Group>

            <Button variant="info" type="submit">Submit</Button>

        </Form>

    )
}
export default ArticleForm
