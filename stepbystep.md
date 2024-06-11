# Create project agri_posts, Api only and postgresql database
rails new agri_posts --api -d postgresql

# Create model post with name & details
rails g model post name:string details:string

# Create and migrate model to database
rails db:create
rails db:migrate

# Generate v1 api, post controller 
rails g controller v1/posts

# added route for index / get all posts
# added route for delete / destroy
# added route for show certain post
# added route for create a new post