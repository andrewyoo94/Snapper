export const fetchTag = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/tags/${id}`
    })
);

export const fetchTags = () => (
    $.ajax({
        method: "GET",
        url: "/api/tags"
    })
);

export const createTag = (tag) => {
    debugger
    return $.ajax({
        method: "POST",
        url: "/api/tags",
        data: { tag },
        // processData: false,
        // contentType: false,
        // cache: false
    })
};