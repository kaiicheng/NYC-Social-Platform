import React from "react";

import { Grid } from "semantic-ui-react";

import Topics from "../components/Topics";

function Posts() {
    // return "Hello, Posts";
    return (
        <Grid>
            {/* default grid size of row is 16 */}
            <Grid.Row>
                {/* <Grid.Column width={3}>Category</Grid.Column> */}
                <Grid.Column width={3}><Topics/></Grid.Column>
                <Grid.Column width={10}>Posts</Grid.Column>
                <Grid.Column width={3}>Space</Grid.Column>
            </Grid.Row>    
        </Grid>
    );
}

export default Posts;