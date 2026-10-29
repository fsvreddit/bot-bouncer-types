export interface ReducedPost {
    id: `t3_${string}`;
    createdAt: number;
    subredditName: string;
    nsfw: boolean;
    title: string;
    body: string | undefined;
    authorName: string;
    authorId: `t2_${string}` | undefined;
    url: string;
    crosspostParentId: `t3_${string}` | undefined;
}
