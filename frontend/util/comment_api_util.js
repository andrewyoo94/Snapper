export const createComment = (comment) => {
    return $.ajax({
        method: "POST",
        url: "/api/comments",
        data: { comment }
    })
}

export const fetchAllComments = () => {
    return $.ajax({
        method: "GET",
        url: "/api/comments",
        data: { photo_id: id }
    })
};


export const deleteComment = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/comments/${id}`
    })
)

