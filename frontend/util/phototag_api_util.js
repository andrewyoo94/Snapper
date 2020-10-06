export const createPhotoTag = (phototag) => {
    debugger
    return $.ajax({
        method: "POST",
        url: "/api/phototags",
        data: { phototag } 
    })
};

export const fetchPhotoTags = (tagId) => {
    return $.ajax({
        method: "GET",
        url: "/api/phototags",
        data: { tag_id: tagId }
    })
};