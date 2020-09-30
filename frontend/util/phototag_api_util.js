export const createPhotoTag = (photoTag) => {
    return $.ajax({
        method: "POST",
        url: "/api/phototags",
        data: photoTag 
    })
};

export const fetchPhotoTags = (tagId) => {
    return $.ajax({
        method: "GET",
        url: "/api/phototags",
        data: { tag_id: tagId }
    })
};