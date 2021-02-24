# Snapper

[Live Demo](https://snapper-app.herokuapp.com/#/)

Snapper is a clone of flickr, a social image hosting website. Allowing users to easily save and share their photos around the world.

### Technology 
* Ruby on Rails
* React.js
* Redux
* PostgreSQL
* Rails Active Storage with Amazon's S3

## Editing Photo Info
```
    handleEdit(e) {
        e.preventDefault();

        let newTitle;
        let newDescription;

        if (this.state.editable) {
            newTitle = this.titleEdit.current.value;
            newDescription = this.descriptionEdit.current.value;
        }
        this.setState({ editable: !this.state.editable })

        // let editedPhoto = this.props.photo;
        // let editedPhoto = { id: this.props.photoId, title: newTitle, description: newDescription, photographer_id: this.props.photo.photographer_id, photoUrl: this.props.photo.photoUrl }

        let editedPhoto = { 
            photo: { id: this.props.photoId, title: newTitle, description: newDescription},
            id: this.props.photoId
        };
        // let editedPhoto = { id: this.props.photoId, title: newTitle, description: newDescription };

        // const photo = Object.assign({}, editedPhoto);

        // let editedPhoto = { title: newTitle, description: newDescription }


        this.props.updatePhoto(editedPhoto)
            // .then(() => this.props.history.push(`/photos/${editedPhoto.id}`))
            .then(() => this.props.fetchPhoto(this.props.photoId))
    }
```
