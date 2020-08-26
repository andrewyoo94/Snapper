import { $CombinedState } from "redux"

export const createComment = (comment) => {
    return $.ajax({
        method: "POST",
        url: "/api/comments"
    })
}

export const fetchAllComments = () => {
    return $.ajax({
        method: "GET",
        url: "/api/comments"
    })
};


export const deleteComment = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/comments/${id}`
    })
)