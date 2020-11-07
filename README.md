# Eyetool-Virtual-Eyewear

## Working on Amazon Web Services

#### Connect to aws ec2 virtual machine:
* You must have eyetool.pem file
* Give permission to file: chmod 400 eyetool.pem
* Connect using ssh: ssh -i "eyetool.pem" ubuntu@ec2-3-22-141-30.us-east-2.compute.amazonaws.com
* To transfer files:  scp -i ./eyetool.pem ./src/static/models/broglasses/Update_third_party.zip  ubuntu@ec2-3-22-141-30.us-east-2.compute.amazonaws.com:~/eyetool/Eyetool-Virtual-Eyewear/src/static/models/broglasses


#### Run docker file:
* docker build . -t eyetool
* docker run --restart always -d -p 3000:3000 -t eyetool

#### Database:
Our database temporarily stored in db.json file, where authentication api_key is connected with domain

#### Models:
3D models of glasses stored in a filesystem, located at './src/static/models/{client_company}/glasses'
<br> Make sure that all directories in models are in .gitignore except eyetool directory
<br> Models transfered using FTP protocol to virtual machine
