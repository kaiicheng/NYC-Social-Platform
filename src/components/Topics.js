import { Container, Header, Form, Image, Button } from "semantic-ui-react"; 

import React from "react";

import "firebase/firestore";

import firebase from "../utils/firebase";

function NewPost() {
    // return "New Post!";
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [topics, setTopics] = React.useState([]);
    const [topicName, setTopicName] = React.useState("");
    const [file, setFile] = React.useState(null);

    // get data from firebase
    React.useEffect(() => {
        firebase
            .firestore()
            .collection("topics")
            .get()
            .then((collectionSnapshot) => {
                const data = collectionSnapshot.docs.map((doc) => {
                    return doc.data();
                });

                setTopics(data)

                // print out data stored on Firestore
                // Array (2) [{…}, {…}]
                // 0: {name: 'film'}
                // 1: {name: 'basketball'}
                // length: 2
                // console.log(data);
            });
    }, []);

    const options = topics.map(topic => {
        return {
            text: topic.name,
            value: topic.name,
        }   
    })

    const previewUrl = file 
        ? URL.createObjectURL(file)
        : "https://react.semantic-ui.com/images/wireframe/image.png";

    return (
        <Container>
 
            <Header>
                Publish a new post
            </Header>

            <Form>

                {/* section for upload photos and preview */}
                <Image 
                    src={previewUrl}
                    size="medium"
                    floated="left"/>
                <Button basic as="label" htmlFor="post-image">Upload photo</Button >
                <Form.Input 
                    type="file" 
                    id="post-image" 
                    style={{display: "none"}}
                    onChange={(e) => setFile(e.target.files[0])}
                />


                {/* section for text and category */}
                <Form.Input 
                    placeholder="Type the title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                
                <Form.TextArea
                    placeholder="Write the content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}
                />

                <Form.Dropdown
                    placeholder="Choose category"

                    // options={[
                    //     {
                    //         text: "Basketball",
                    //         value: "sports"
                    //     },
                    //     {
                    //         text: "Cuisine",
                    //         value: "food"
                    //     },
                    //     {
                    //         text: "Sci-fi",
                    //         value: "movie"
                    //     },
                    // ]}
                    // use return value of options function to replace above data structure
                    options={options}
                    selection
                    value={topicName}
                    onChange={(e, { value}) => setTopicName(value)}
                />
                <Form.Button>Submit</Form.Button>
            </Form>
        </Container>
    )
};

export default NewPost;
