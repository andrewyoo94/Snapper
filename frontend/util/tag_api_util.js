export const fetchTag = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/tags`,
        data: {id}
    })
);

export const fetchTags = () => (
    $.ajax({
        method: "GET",
        url: "/api/tags"
    })
);

export const createTag = (tag) => {
    return $.ajax({
        method: "POST",
        url: "/api/tags",
        data: { tag },
        // processData: false,
        // contentType: false,
        // cache: false
    })
};