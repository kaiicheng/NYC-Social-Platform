import React from "react";

import { Header, Button, Segment, Modal, Input } from "semantic-ui-react";

import firebase from "../utils/firebase";

function MyName() {

    const user = firebase.auth().currentUser;

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const [displayName, setDisplayName] = React.useState("");

    const [isLoading, setIsLoading] = React.useState(false);

    function onSubmit() {
        setIsLoading(true);
        user
            .updateProfile({
            // displayName: displayName,
            displayName,
        })
            .then(() => {
                setIsLoading(false);
                setDisplayName("");
                setIsModalOpen(false);
        })
    }

    return (
        <>
            <Header size="small">
                Account name
                {/* floated="right" will locate button on right-hand side */}
                <Button floated="right" onClick={() => setIsModalOpen(true)}>
                    Edit
                </Button>
            </Header>
            <Segment vertical>
                {user.displayName}
            </Segment>
            {/* after activating modal, a new screen will pop up */}
            <Modal open={isModalOpen} size="mini">
                <Modal.Header>Edit username</Modal.Header>
                <Modal.Content>
                    <Input 
                        placeholder="New username"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        // fluid extend input section size
                        fluid
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                    <Button onClick={onSubmit} loading={isLoading}>Edit</Button>
                </Modal.Actions>
            </Modal>
        </>
    );
}

function MySettings () {
    // return "Member info"
    
    const user = firebase.auth().currentUser || {};

    return (
    <>
        <Header>
            Member information
        </Header>

        <MyName/>

        <Header size="small">
            Member photo
            {/* floated="right" will locate button on right-hand side */}
            <Button floated="right">Edit</Button>
        </Header>
        <Segment vertical>
            {UserActivation.photoURL}
        </Segment>

        <Header size="small">
            Member password
            {/* floated="right" will locate button on right-hand side */}
            <Button floated="right">Edit</Button>
        </Header>
        <Segment vertical>
            *********
        </Segment>

    </>
    );
}

export default MySettings;
