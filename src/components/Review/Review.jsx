export const Review = ({review}) => {
    const {author, content} = review;
    return <>
        <b><p>{"Autor "}<span>{author}</span></p></b>
        <p>{content}</p>
    </>
}