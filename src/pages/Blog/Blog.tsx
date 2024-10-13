import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsErrorSelector, getPostsPendingSelector, getPostsSelector } from "./selectors";
import { getPostsRequest } from './slice';
import * as React from "react";
import {
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Container,
    Row,
    Spinner,
    Toast, ToastBody
} from "reactstrap";

import {IPost} from "./types";
import './style.scss';

const Blog = () => {
    const dispatch = useDispatch();
    const isPostsLoading = useSelector<boolean>(getPostsPendingSelector);
    const postsError = useSelector(getPostsErrorSelector);
    const blogData = useSelector<any>(getPostsSelector);

    useEffect(() => {
        dispatch(getPostsRequest(''));
    }, []);

    return (
        <Container className="blog">
            {isPostsLoading ? (
                <div className="loader">
                    <Spinner className="spinner" color="success">
                        Loading...
                    </Spinner>
                </div>
            ) : (
                <Row>
                    {blogData?.posts?.length > 0 && blogData.posts.map((post: IPost) => (
                        <Col md="4" key={post.id} className="mb-4 d-flex">
                            <Card
                            >
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {post.title}
                                    </CardTitle>
                                    <CardText>
                                        {post.body}
                                    </CardText>
                                    <Button>
                                        Button
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>

                    ))
                    }
                </Row>
            )}
            {postsError && (
                <Toast>
                    <ToastBody>
                        Some error
                    </ToastBody>
                </Toast>
            )}
        </Container>
    );
}

export default Blog;
