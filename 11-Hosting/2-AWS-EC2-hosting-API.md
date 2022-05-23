# DEPLOYMENT - Node.js
> DO THIS ON YOUR PERSONAL AWS ACCOUNTS

> ERRORS MAY COST STUDENTS UP TO $1.00/month

# START UP SERVER:
## Create EC2 Instance:
- AWS console > search for EC2
- In the left panel (expand it if necessary) under Instances click `Instances`
- Click `Launch Instances`
- From the options select `Ubuntu Server 20.04 LTS (HVM), SSD Volume Type (free tier)` 
	- hint: use `control/command -f` to find it faster 
- t2.micro (free tier) > hit `next` until `Configure security group`
- Configure your Security group to look like this:
	- SSH TCP 22 Custom 0.0.0.0/0
- Click Review & Launch > Launch 
## Key pair pop up:
- Create new key pair
- RSA
- 'contacts' is the name for our example instance 
- Click `download key pair` (* SAVE TO A FILE YOU CAN FIND - you may want a `config folder` in your project root-directory (one outisde of git) *)
- Read the warning: this is a very standard practice
- Click `Launch Instances `
- Click `View Instance`
- Instance state and status check will not be green immediately
- Click your instance ID
- After 2-3 mins the instance state should no longer be be pending 
- Click connect button 
	- Swap to SSH client tab
	- Your SSH client is Bash or terminal - you can use a new vs code terminal 
	- Your private key is the file we just downloaded (cd to it) - sometimes it dosen't download as a `pem` file - change its extension to be `.pem` ex: `contacts.cer` -> `contacts.pem`
	- Run step 3
	- Skip step 4 and just use the default example
	- Agree with whatever comes up in the terminal and you should see something similar to this:
		- ubuntu@ip-172-31-55-555:~$
	- ***You are now in a remote Ubuntu device in an AWS warehouse somewhere! Woohoo!***

## CLONE CODE ONTO REMOTE DEVICE:
> We are going to just set up our ubuntu dev environment and then pull the code from github onto the Ubuntu instance
- Locally, make sure back-end is up to date (add, commit, push if necessary)
- In the Ubuntu server, git clone backend - grab the url from your github backend repo
- ***Cd into your backend***, run the necessary installs: 
- You should recognize the last 4, the first few are because the Ubuntu server is SO empty it even needs npm & node.js
- Installing nodesource key, apt repo file, install packages, update apt file
	- `curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -`
- Install node package manager
	- `sudo apt install npm`
	- (Unable to correct problems is okay)
- Install node js (to run JavaScript outside a browser AKA a server)
	- `sudo apt install nodejs`
- Check node and npm are installed
	- `node --version`
	- `npm --version`
- Create an npm initialization and agree to everything/keep the standards
	- `npm init -y `
- Install PSQL manager & express
	- `npm i pg express`
- Install Cross Origin Resource Sharing package & save it as a dependency
	- `npm install --save cors`
<!-- - Install all dependencies
	- `npm install` -->
- Install pm2, we'll use this instead of nodemon
	- PM2 is used to run servers even after we close out of the teriminal - nodemon is faster but closes after we close the terminall
	- `sudo npm install -g pm2`
- Start the Ubuntu server
  - `pm2 start index.js `

## ***Your backend server is now running!***

### Other commands and notes for future reference:
- To restart the Ubuntu server: `pm2 restart index.js`
- To stop the Ubuntu server: `pm2 stop index.js`
- To update the code, 
	- Locally pull the server, make updates, push the code to your repo
	- SSH into your server using the steps detailed in your AWS EC2 Instance - you'll still need access to your config file/pem key
	- Pull your code and restart the server using `pm2 restart index.js`

## Allow connectivity 
- In AWS Console let's update secuirty 
- Click into instance ID -> scroll down and click on the Security tab -> click into the Security Groups ID -> edit Inbound rules to be the following:
```
Inbound:
	Type 			| Protocol |	Range	| Source
	--------------------------------------------------------------	
	HTTP				TCP					80			Anywhere	ipv4
	HTTPS				TCP					443			Anywhere	ipv4
	SSH					TCP					22			Anywhere	ipv4
	CUSTOM TCP 	TCP					3030		Anywhere 	ipv4	
	ALL TRAFFIC	All					All			Anywhere	ipv4
```
Swap to outbound tab -> edit outbound rules to be the following:
```
Outbound:
	Type 			| Protocol |	 Range		| 	Source
--------------------------------------------------------------	
	All TCP			TCP				0 - 65535			Anywhere ipv4
	All Traffic	All				All						Anywhere ipv4
```
-	Save Rules for both after adding additional rules 
> Note: these rules are VERY loose and wouldn't be great for a truly secure app. We're more focused on deployment than backend security today. That being said only your db data and other non-important information could be exposed

## TEST EC2 INSTANCE 
- Go back into EC2 instance
- copy Public IPv4 DNS  
- Open a new tab
	- Paste and add `http://` at the front (NOT https://) and add `:3030` at the end of URL 
	- Ex: `http://ec2-34-205-65-31.compute-1.amazonaws.com:3030/`
- If that works then add other routes ex: `:3030/contacts` to list out GET request 
	- Ex: `http://ec2-34-205-65-31.compute-1.amazonaws.com:3030/contacts`

## ***Your backend server is now running, functional and accessible!!***

## UPDATE REACT FETCH
- Grab http URL ex: `http://ec2-34-205-65-31.compute-1.amazonaws.com:3030/songs`
- Insert it into fetch request in front-end app 
	
- Kill local back-end server and run some tests (CRUD)
	
Again: IF YOU NEED TO UPDATE BACK-END CODE
- Update the info locally 
	- add, commit and push to github
- SSH into the server (follow steps in EC2 instance -> Connect to instance)
- In the server, cd into back-end and git pull
	- vim queries.js to check for changes
	- :q to quit vim

Congrats your front end now pulls data from your hosted server which access information from your hosted RDS! 

This is a development/test environment. Things you should update if you were to be deploying a business application include: never pushing your important info to your backend, you should have a .env file handling that (if you have time after deploying your front end this is an activity to pursue). And fine-tuning security on AWS to ensure only users you expect have access to data that you want them to have access to. 