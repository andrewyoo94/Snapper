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

User.create(
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

# change usernames to real ones ! 

# comment1 = Comment.create!({
#     user_id:
#     photo_id: 
#     body: 
# })

photo1.image.attach(io: open('https://snapper-dev.s3.amazonaws.com/bradley-dunn-i8qs7bfTB0M-unsplash.jpg'), filename: "bradley-dunn-i8qs7bfTB0M-unsplash.jpg")
photo1.save!

user2 = User.create!({
    username: "Joker",
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
    username: "Hermione",
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
    title: "Open field",
    description: "Pretty flower field",
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
