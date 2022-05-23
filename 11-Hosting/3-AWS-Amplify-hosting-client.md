# DEPLOYMENT - React
> DO THIS ON YOUR PERSONAL AWS ACCOUNTS

> ERRORS MAY COST STUDENTS UP TO $1.00/month

## Navigate to the Amplify service
- Click new app > host web app
- Choose github
- Authorize DEFAULT
- Enter password
- (refresh if need be)
- Select repo > main branch
- Leave build and test settings as-is
- Next
- Save & Deploy
- This may take up to 5 minutes to provision, build, deploy, and verify - continue on to the next steps

If you let your app deploy it will render without data - you'll get an error about `Mixed Content`. Amplify only allows `HTTPS` requests - our server only serves up `HTTP` requests. We need to utilize `AWS Cloudfront` to fix this issue. We'll forward our `HTTP` server onto a secure `HTTPS` and then hit that new url with our front-end.

Navigate to AWS Cloudfront Service
- Create distribution
- Origin Domain name = Open new AWS Console tab, head to EC2 and get the ivp4 public link link from your server
- Protocol:
    - Http only
    - Http port: 3030
- Viewer protocol policy = http & https
- Allowed Https Methods: get, head, options, put, post, patch, delete
- Restrict Viwer Access: No
- Legacy cache settings
    - Headers: All
    - Query Strings: All
    - Cookies: None
    - Response Headers policy: empty (leave un-filled)
- Response headers policy: Simple CORS
- Everything else is fine
- Click Save
- Click back to distributions - find your new distribution, it should still be deploying under 'last modified'
- Click into that distribution, copy the `distribution domain name`, drop that url into a new tab with `https://` infront of it. 
    - Ex: `https://d2schu67q0w7me.cloudfront.net` and `https://d2schu67q0w7me.cloudfront.net/contacts`
- Now update your front-end code to match. Locally head into your App.jsand replace your EC2 Url with your new link, there should no-longer be `:3030` we've included that in the distribution description.
- Test it locally - if it works continue. If it doesnt refer to the screenshots within 11-Hosting\CloudFront_Example_Screenshots.
- Add, commit (updated ec2 endpoint to cloudfront https endpoint), and push
- Get your live app url from Amplify and test the app functionality!

***You now have a deployed full stack application!***

> Learning these steps is nothing more than repetition. If you have time try and build and deploy a full stack app in 4 hours or less. Repeat this as many times as possible and you'll make new mistakes, learn new things and become more comfortable with the process. 

If you're running into issues check your settings against the screenshots within 11-Hosting\CloudFront_Example_Screenshots.