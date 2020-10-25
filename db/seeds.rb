# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# test_photo1 = Photo.create(title: "test", description: "testing photo")

# file = open("url from aws bucket")
# test_photo1.img.attach(io: file, filename: "test_photo1_img.jpg")

require "open-uri"

User.destroy_all
Photo.destroy_all
Comment.destroy_all
Tag.destroy_all
Phototag.destroy_all

User.create!(
  username: 'demouser',
  password: 'password'
)

user1 = User.create!({
    username: "James Bond",
    password: "password"
})

photo1 = Photo.new({
    title: "Space Bike",
    description: "Riding on the moon!",
    photographer_id: user1.id,
    user: user1
})

photo1.image.attach(io: open('https://snapper-dev.s3.amazonaws.com/bradley-dunn-i8qs7bfTB0M-unsplash.jpg'), filename: "bradley-dunn-i8qs7bfTB0M-unsplash.jpg")
photo1.save!

user2 = User.create!({
    username: "Donnie Darko",
    password: "password"
})

photo2 = Photo.new({
    title: "Baby Owl",
    description: "Hey you!",
    photographer_id: user2.id,
    user: user2
})
photo2.image.attach(io: open('https://snapper-dev.s3.amazonaws.com/richard-lee-8spo0Sr00j8-unsplash.jpg'), filename: "richard-lee-8spo0Sr00j8-unsplash.jpg")
photo2.save!

user3 = User.create!({
    username: "April Ludgate",
    password: "password"
})

photo3 = Photo.new({
    title: "Breakfast",
    description: "Balanced meal",
    photographer_id: user3.id,
    user: user3
})
photo3.image.attach(io: open('https://snapper-dev.s3.amazonaws.com/amy-shamblen-DhULFYb5J9w-unsplash.jpg'), filename: "amy-shamblen-DhULFYb5J9w-unsplash.jpg
")
photo3.save!

user4 = User.create!({
    username: "Jon Snow",
    password: "password"
})

photo4 = Photo.new({
    title: "Open field",
    description: "Pretty flower field",
    photographer_id: user4.id,
    user: user4
})
photo4.image.attach(io: open('https://snapper-dev.s3.amazonaws.com/brandon-leclaire-qkVrnY0Q2Kg-unsplash.jpg'), filename: "brandon-leclaire-qkVrnY0Q2Kg-unsplash.jpg
")
photo4.save!


user5 = User.create!({
    username: "Michael Scott",
    password: "password"
})

photo5 = Photo.new({
    title: "Graffiti love",
    description: "Artwork found in Brooklyn",
    photographer_id: user5.id,
    user: user5
})
photo5.image.attach(io: open('https://snapper-dev.s3.amazonaws.com/crawford-jolly-0XHLU2TPqoY-unsplash.jpg'), filename: "crawford-jolly-0XHLU2TPqoY-unsplash.jpg")
photo5.save!


user6 = User.create!({
    username: "Phoebe Buffay",
    password: "password"
})

photo6 = Photo.new({
    title: "Cooper the Cat!",
    description: "Just another day of cooping around.",
    photographer_id: user6.id,
    user: user6
})
photo6.image.attach(io: open('https://snapper-dev.s3.amazonaws.com/jonathan-cooper-DYm6tSSGjGM-unsplash.jpg'), filename: "jonathan-cooper-DYm6tSSGjGM-unsplash.jpg")
photo6.save!


user7 = User.create!({
    username: "Carlton Banks",
    password: "password"
})

photo7 = Photo.new({
    title: "Commute on the B line.",
    description: "Daily routine",
    photographer_id: user7.id,
    user: user7
})
photo7.image.attach(io: open('https://snapper-dev.s3.amazonaws.com/mike-von-iNRNfsqGpmU-unsplash.jpg'), filename: "mike-von-iNRNfsqGpmU-unsplash.jpg")
photo7.save!


user8 = User.create!({
    username: "Lucille Bluth",
    password: "password"
})

photo8 = Photo.new({
    title: "Peachy Window",
    description: "Random window in Paris.",
    photographer_id: user8.id,
    user: user8
})
photo8.image.attach(io: open('https://snapper-dev.s3.amazonaws.com/parker-coffman-RCfHM4dDCOY-unsplash.jpg'), filename: "parker-coffman-RCfHM4dDCOY-unsplash.jpg")
photo8.save!

user9 = User.create!({
    username: "Ted Mosby",
    password: "password"
})

user10 = User.create!({
    username: "Homer Simpson",
    password: "password"
})

user11 = User.create!({
    username: "Lucille Bluth",
    password: "password"
})

user12 = User.create!({
    username: "Lucille Bluth",
    password: "password"
})

user13 = User.create!({
    username: "Lucille Bluth",
    password: "password"
})

user14 = User.create!({
    username: "Lucille Bluth",
    password: "password"
})

# Comments/Tags Seeding---------------------------------------------------------------------------------------------------------

p1c1 = Comment.create!({
    user_id: user8.id,
    photo_id: photo1.id,
    body: "Nice bike!"
})

p1c2 = Comment.create!({
    user_id: user7.id,
    photo_id: photo1.id,
    body: "Awesome picture"
})

p1c3 = Comment.create!({
    user_id: user6.id,
    photo_id: photo1.id,
    body: "Cool helmet."
})


# ----------------------------------------------------------------------------------------

p2c1 = Comment.create!({
    user_id: user5.id,
    photo_id: photo2.id,
    body: "Cute owl!"
})

p2c2 = Comment.create!({
    user_id: user4.id,
    photo_id: photo2.id,
    body: "Great photo"
})

p2c3 = Comment.create!({
    user_id: user3.id,
    photo_id: photo2.id,
    body: "Cool background."
})

# ----------------------------------------------------------------------------------------

p3c1 = Comment.create!({
    user_id: user2.id,
    photo_id: photo3.id,
    body: "Yummy breakfast!"
})

p3c2 = Comment.create!({
    user_id: user1.id,
    photo_id: photo3.id,
    body: "Looks good"
})

p3c3 = Comment.create!({
    user_id: user8.id,
    photo_id: photo3.id,
    body: "Amazing colors."
})

# ----------------------------------------------------------------------------------------

p4c1 = Comment.create!({
    user_id: user7.id,
    photo_id: photo4.id,
    body: "Pretty flowers!"
})

p4c2 = Comment.create!({
    user_id: user6.id,
    photo_id: photo4.id,
    body: "Nice effects"
})

p4c3 = Comment.create!({
    user_id: user5.id,
    photo_id: photo4.id,
    body: "Beautiful scenery."
})

# ----------------------------------------------------------------------------------------

p5c1 = Comment.create!({
    user_id: user4.id,
    photo_id: photo5.id,
    body: "Stunning artwork!"
})

p5c2 = Comment.create!({
    user_id: user3.id,
    photo_id: photo5.id,
    body: "Very nice piece"
})

p5c3 = Comment.create!({
    user_id: user2.id,
    photo_id: photo5.id,
    body: "I love this artist."
})

# ----------------------------------------------------------------------------------------

p6c1 = Comment.create!({
    user_id: user1.id,
    photo_id: photo6.id,
    body: "Cute cat!"
})

p6c2 = Comment.create!({
    user_id: user2.id,
    photo_id: photo6.id,
    body: "So adorable"
})

p6c3 = Comment.create!({
    user_id: user3.id,
    photo_id: photo6.id,
    body: "Charming model."
})

# ----------------------------------------------------------------------------------------

p7c1 = Comment.create!({
    user_id: user2.id,
    photo_id: photo7.id,
    body: "I take this train!"
})

p7c2 = Comment.create!({
    user_id: user1.id,
    photo_id: photo7.id,
    body: "Nice effects"
})

p7c3 = Comment.create!({
    user_id: user8.id,
    photo_id: photo7.id,
    body: "Amazing candid photo."
})

# ----------------------------------------------------------------------------------------

p8c1 = Comment.create!({
    user_id: user7.id,
    photo_id: photo8.id,
    body: "Love the colors!"
})

p8c2 = Comment.create!({
    user_id: user6.id,
    photo_id: photo8.id,
    body: "Simple but mesmerizing"
})

p8c3 = Comment.create!({
    user_id: user5.id,
    photo_id: photo8.id,
    body: "Lovely photo."
})

# ----------------------------------------------------------------------------------------

t1p1 = Tag.create!({
    photo_id: photo1.id,
    name: "bike"
})

t2p1 = Tag.create!({
    photo_id: photo1.id,
    name: "astronaut"
})

t3p1 = Tag.create!({
    photo_id: photo1.id,
    name: "mountain"
})

# ----------------------------------------------------------------------------------------

t1p2 = Tag.create!({
    photo_id: photo2.id,
    name: "owl"
})

t2p2 = Tag.create!({
    photo_id: photo2.id,
    name: "branch"
})

t3p2 = Tag.create!({
    photo_id: photo2.id,
    name: "nature"
})# ----------------------------------------------------------------------------------------

t1p3 = Tag.create!({
    photo_id: photo3.id,
    name: "breakfast"
})

t2p3 = Tag.create!({
    photo_id: photo3.id,
    name: "fruits"
})

t3p3 = Tag.create!({
    photo_id: photo3.id,
    name: "food"
})# ----------------------------------------------------------------------------------------

t1p4 = Tag.create!({
    photo_id: photo4.id,
    name: "flowers"
})

t2p4 = Tag.create!({
    photo_id: photo4.id,
    name: "field"
})

t3p4 = Tag.create!({
    photo_id: photo4.id,
    name: "daisies"
})# ----------------------------------------------------------------------------------------

t1p5 = Tag.create!({
    photo_id: photo5.id,
    name: "graffiti"
})

t2p5 = Tag.create!({
    photo_id: photo5.id,
    name: "artwork"
})

t3p5 = Tag.create!({
    photo_id: photo5.id,
    name: "love"
})# ----------------------------------------------------------------------------------------

t1p6 = Tag.create!({
    photo_id: photo6.id,
    name: "cat"
})

t2p6 = Tag.create!({
    photo_id: photo6.id,
    name: "pet"
})

t3p6 = Tag.create!({
    photo_id: photo6.id,
    name: "animal"
}) # ----------------------------------------------------------------------------------------

t1p7 = Tag.create!({
    photo_id: photo7.id,
    name: "subway"
})

t2p7 = Tag.create!({
    photo_id: photo7.id,
    name: "train"
})

t3p7 = Tag.create!({
    photo_id: photo7.id,
    name: "people"
})# ----------------------------------------------------------------------------------------

t1p8 = Tag.create!({
    photo_id: photo8.id,
    name: "window"
})

t2p8 = Tag.create!({
    photo_id: photo8.id,
    name: "house"
})

t3p8 = Tag.create!({
    photo_id: photo8.id,
    name: "flower"
})