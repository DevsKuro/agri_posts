# Create project agri_posts, Api only and postgresql database
rails new agri_posts --api -d postgresql

# Create model post with name & details
rails g model post name:string details:string

# Create and migrate model to database
rails db:create
rails db:migrate

