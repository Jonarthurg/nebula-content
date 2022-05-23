# React Hosting
Please grab a debit or credit card before we get started. You will not incur any costs today and shouldn't incur any costs for your first year with AWS - however they need a card on file incase you utilize services or features that fall outside the free tier. 

We're going to host our projects on the internet utilizing AWS Amplify. We won't be customizing domains today so your url will be something funky like https://main.dtg1z3z9ilfxy.amplifyapp.com/. 
- First head to [aws.amazon.com](aws.amazon.com) and create an account if you don't already have one
    - Remember, nearly everything in the cloud costs something. However, AWS provides 1 year of access to free-tier. Usage of their smallest devices.
    - Everything you do is just renting some hardware that AWS owns in a data center
    - Simply put the cloud is just a bunch of computers in a building (usually somewhere cold) that you can rent.
    - That being said you shouldn't incurr any costs today or for the next year
    - Utilize your personal email address to create this account - similar to `GitHub` you'll want access to this information for years post-bootcamp.

Step 1:
Step 2: Personal
Step 3: 
Step 4: 
Step 5: Basic

- After creating your account you'll be sent a unique log in 12 digit code for your 'organization'. I would bookmark this and save it to a note to your computer - you can always recover it too if need be.
- For example the Nebula login address is: [https://166361070807.signin.aws.amazon.com/console](https://166361070807.signin.aws.amazon.com/console)
- You are logged in as the `Root user`. Generally this is a bad idea and you're supposed to create an admin account and delete your `Root user` 
    - That being said we don't need to overcomplicate this process and this is just your personal AWS cloud so you can treat it as you like. The security processes and protocols you follow are up to you.

- Let's head to Amplify. 
- In the top NavBar you should see a `services` option and a search bar to the right of it
- Start search for `Amplify` and select it when you see it 
- Amplify is a set of purpose-built tools and features that lets frontend web and mobile developers quickly and easily build full-stack applications on AWS, with the flexibility to leverage the breadth of AWS services as your use cases evolve.
- It also has back-end hosting capabilities but that isnt it's forte right now

- Lets click `new app` in the top right
- Click `host web app` then click `github`
- Click continue and you will be prompted to hook up your `github` with your `AWS Amplify` account

- Once GitHub is authorized click the `select a repository` dropdown option and select the apropriate project. It should be at the top (if you've pushed recently) but that isn't always the case.

- Select the branch you'd like to deploy. Usually this is main or a branch called 'deployment' 
- Click next through the build settings. The defaults should be fine
- Then click save and deploy

- You should receive an email from `GitHub` about a new public key being added to a repo 
- It took about 5 minutes for it to deploy an example portfolio 