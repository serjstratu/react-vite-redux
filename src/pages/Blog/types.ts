export interface IPostsResponse {
    posts: IPost[];
    total: number;
    skip?: number
    limit?: number;
}

export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
    views: number;
    reactions: IPostReactions
    tags: string[];
}

export interface IPostReactions {
    likes: number;
    dislikes: number;
}

export interface PostsState {
    posts: any;
    pending: boolean;
    error: string | null;
}

export interface IPostsParams {
    email: string | null;
}