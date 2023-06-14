import React from "react";

import { Grid, Item, Image, Icon } from "semantic-ui-react";

import Topics from "../components/Topics";

import firebase from "../utils/firebase";

function Posts() {
    // return "Hello, Posts";
    
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        firebase.firestore().collection("posts").get().then((collectionSnapshot) =>{
            const data = collectionSnapshot.docs.map(docSnapshot => {
                const id = docSnapshot.id;
                return { ...docSnapshot.data(), id };
            })
            setPosts(data);
        })
    }, [])
    
    return (
        <Grid>
            {/* default grid size of row is 16 */}
            <Grid.Row>
                {/* <Grid.Column width={3}>Category</Grid.Column> */}
                <Grid.Column width={3}><Topics/></Grid.Column>

                <Grid.Column width={10}>
                    <Item.Group>
                        {posts.map((post) => {
                            // return <p>{post.title}</p>
                            return (
                                <Item key={post.id}>
                                    <Item.Image src={post.imageURL} size="medium" />
                                    <Item.Content>
                                        <Item.Meta>
                                            {post.author.photoURL ? (
                                                <Image src={post.author.photoURL} />
                                            ) : ( 
                                                <Icon name="user circle"/>
                                            )}
                                            {post.topic} · {post.author.displayName || "User"}
                                        </Item.Meta>
                                        <Item.Header>{post.title}</Item.Header>
                                        <Item.Description>{post.content}</Item.Description>
                                        <Item.Extra>
                                            Comment 0 · Like 0
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            );
                            })  
                        }
                    </Item.Group>
                </Grid.Column>

                <Grid.Column width={3}>Space</Grid.Column>
            </Grid.Row>    
        </Grid>
    );
}

export default Posts;
