export const fetchAllPhotos = () => {
    return $.ajax({
        method: "GET",
        url: "/api/photos"
    })
};

export const fetchPhoto = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/photo/${id}`
    })
};

export const createPhoto = (photo) => {
    return $.ajax({
        method: "POST",
        url: "/api/photos",
        data: photo,
        contentType: false,
        processData: false
    })
};