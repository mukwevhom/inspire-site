import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react';
import MyForm from './Form';

export default function JoinUsModal() {
    return (
        <Modal trigger={<Button className="btn cta w-25">Join Us</Button>}>
            <Modal.Content >
            <Modal.Description>
                <Header>Default Profile Image</Header>
                <MyForm />
            </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}