import React from "react";

import { useParams } from "react-router-dom";

import { Container, Grid, Image, Header, Segment, Icon } from "semantic-ui-react";

import Topics from "../components/Topics";
import firebase from "../utils/firebase";

function Post() {
    // return "Post"

    // use postId to get the post
    const { postId } = useParams();
    const [post, setPost] = React.useState({
        author: {},
    });

    React.useEffect(() => {
        // use .doc() to get the post from the .collection()
        firebase
            .firestore()
            .collection("posts")
            .doc(postId)
            .get()
            .then((docSnapshot) => {
                const data = docSnapshot.data();
                setPost(data);
            });
        }, []);

    return (
        <Container>
            <Grid>
                {/* default grid size of row is 16 */}
                <Grid.Row>
                    {/* <Grid.Column width={3}>Category</Grid.Column> */}
                    <Grid.Column width={3}>
                        <Topics/>
                    </Grid.Column>

                    <Grid.Column width={10}>
                        <Image src={post.author.photoURL} /> {post.author.displayName}
                        <Header>
                            {post.title}
                            <Header.Subheader>
                                {post.topic}
                                {/* use .toDate() to turn firebase object into JavaScript date format */}
                                ．
                                {/* .createdAt?: optional chaining */}
                                {post.createdAt?.toDate().toLocaleDateString()}
                            </Header.Subheader>
                        </Header>
                        <Image src={post.imageURL} />
                        {/* basic hide border and vertical remove border */}
                        <Segment basic vertical>{post.content}</Segment>
                        <Segment basic vertical>
                            Comment 0．Like 0．
                            <Icon name="thumbs up outline" color="grey"/>
                            <Icon name="bookmark outline" color="grey"/>
                        </Segment>

                    </Grid.Column>

                    <Grid.Column width={3}>
                        Space
                    </Grid.Column>

                </Grid.Row>    
            </Grid>
        </Container>
    );
}

export default Post;
