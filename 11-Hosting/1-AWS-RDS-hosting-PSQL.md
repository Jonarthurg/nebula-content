# DEPLOYMENT - PSQL
> DO THIS ON YOUR PERSONAL AWS ACCOUNTS

> ERRORS MAY COST STUDENTS UP TO $1.00/month

# Database

# Step 1: Check your app is working:
- Launch app
	- Npm start or yarn start from WITHIN the front end directory
	- Node index.js from within the backend directory
	- React front end & node.js backend - if the data shows and functionality is working then you're good to go

# Step 2: Create DB on AWS:
Head to the AWS Console then to the RDS (relational database) service 
Click Create Database

Settings: 

If it says free, choose it - be sure to read the options as they change somewhat frequently
## Chose a database creation method:
- Standard create

## Engine Options:
- PostgresSQL

## Edition:
- PostgresSQL 13.5-R1

<!-- ## Edition:
- Amazon Aurora PostgreSQL-Compatible Edition

## Capacity Type:
- Provisioned -->
<!-- 
## Engine Version:
- Aurora PostgreSQL (Compatible with PostgreSQL 13.4) -->

## Templates:
- Dev/Test

## Availibility & Durability:
	Single DB Instance

## Settings:
- Change the identifier to what your db contains (contacts)
- Set the username & password (I recommend `postgres` and `testpass1`)

## DB instance class:
	Burstable, micro

## Storage:
	General Purpose SSD

## Connectivity:
- VPC: Default
- Subnet group: default
- Public Access: YES <-- if you miss this you 1000% won't be able to access your DB
- Create new VPC Security Group
	- Call it AllowAll 
	- Availability zone no preference
	- Port = 5432
- Availibility Zone: no preference
- Database port: (default) 5432

## Babelfish, Database auth, & additional config should stay as they are

## Click `create database`
		
## Estimated monthly costs:
- Student estimated should be `free tier eligible` unless they created an AWS account 1+ year prior to the bootcamp
- Instructor estimated should be less than $20 ($15.44)

# Step 3: Create VPC Security Group
## Notice we said 'Create new VPC Security Group', we need to go do that now
- Click into the DB identifier - mine was generated as `contacts-instance-1`
- Within the `Connectivity and security` tab there is a VPC security group - click on the link `AllowAll`
	- Alternatively you could have searched `Security` in the services bar, select `EC2 Security`
	- We're now looking at our security group settings
	- Click on the `Inbound Rules` tab and then `Edit Inbound Rules`
		- Type: All TCP
		- Source: Anywhere IPv4
	- Click Save
	- Head to `Outbound Rules` and click `Edit Outbound Rules`
		- Type: All traffic
		- Destination: Anywhere IPv4
	- Click Save

# Step 4: COPY YOUR EXISTING LOCAL DB:
## Copy your DB:  
- Create a new directory
- In your new directory, run the following command to save your local postgres db setup: 
	`PGPASSWORD=<password> pg_dump -f <file name> -U <postgres user> --no-owner <db name>`
		--> documentation for pg_dump command -> https://www.postgresql.org/docs/12/app-pgdump.html
- The example command looks like this:
	- `PGPASSWORD=testpass1 pg_dump -f contacts_dump -U postgres --no-owner contacts`

## Connect to your new RDS
- Head back to the RDS Service (you can use the browser back arrow or search for RDS and click RDS > DB Instances)
- In the 'chart' area there are different columns `DB identifier`, `Role`, etc.., `Status`
- Once the status is available click into the instance & grab the endpoint
	- Our example endpoint looks something like this: `contacts-instance-1.cnuypd0q01wm.us-east-1.rds.amazonaws.com`

- Edit and run the following line to connect
	- `psql -h <YOUR ENDPOINT> -p 5432 -U postgres`
	- Enter the password you wrote when creating the DB, the example password was `testpass1`

- ***CONGRATS YOU'RE CONNECTED TO YOUR AWS HOSTED RDS!***

- Create a new database to match your local one: the example name was `contacts`
	- `CREATE DATABASE contacts;`
	- `\c contacts`
	- Using the vs code file explorer, copy your full path
		- You may want to fix these paths up by pasting them into a text editor and making the following changes: 
			- Windows: 
				- If you have quotes and/or backslashes - remove quotes and swap backslashes with forward slashes
				- Ex:
					- "C:\Users\Nic\Downloads\dump.sql"
					- C:/Users/Nic/Downloads/dump.sql
			-  Mac:
				- You may or may not need to add `.sql` to the end of your path
				- Try the following command once without - if that dosen't work try it with `.sql` appended
	- In your DB connection run `\i <YOUR COPIED PATH>`

- `Refresh` your db by running
	-  `\c` 

- Run `\dt` to view the new tables
		
- Inside of your WORKING app go to `queries.js` and change the host (and password if it differs from your local to your RDS instance):
```js
user: 'postgres',
host: 'database-1.cnuypb0q01wm.us-east-1.rds.amazonaws.com',
database: 'contacts',
password: 'testpass1',
port: 5432
```


Test your application:
On host: localhost and on hosted endpoint

Ex: Add a new item while on the AWS RDS server and switch queries back to old localhost connection info to show that your local and hosted DBs are completely unique.
