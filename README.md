# BTS FANPAGE

## Netlify Link :
   ###### https://btsfanpageapp-ui-keerthanashanmugam.netlify.app/

## Sonarcloud Link :
   ###### https://sonarcloud.io/project/overview?id=fwsa-batch-02_btsfanpageapp-ui 

## Github Link :
   ###### https://github.com/fwsa-batch-02/btsfanpageapp-ui      

### Features :
   ##### 1. Membership Sign Up (completed)
   ##### 2. Login (completed)
   ##### 3. Add Albums (completed)
   ##### 4. List Albums (completed)
   ##### 5. Add BT21 Products (in progress)

### 1. Registration :

   ##### Fields
  * User name
  * Password
  * Confirm Password
  * User email id
  * Date Of Birth
  * Gender
  * Country
   ##### Acceptance Criteria
  * All input fields are required.
  *  User name must contain 3 characters and must not be empty. No special characters are allowed.
  * Password and Confirm password fields must contain minimum 8 and maximum 15 characters with atleast 1 lowercase, 1 uppercase , 1 special character except "space".
  * Password and Confirm password fields must contain same value.
  * Email id must contain 2 characters before the suffix @gmail.com.
  * Email id entered must not exist in local storage already.
  * Date of Birth for registration for membership should be minimum from the year Jan 1950 to maximum Dec 2021.
  * Gender field for registration is requried.
  * Country field must contain minimum 2 characters with only alphabets and must not be empty.
  * If everything is validated the details will store in localstorage and redirect to login page.

 ### 2. Login :
  ##### Fields
 * User email id
 * Password
  ##### Acceptance Criteria
 * All input fields are required.
 * Email id and password should match with the local storage content.
 * If everything is validated, redirect to new releases page.
 
 ### 3. Add Albums :
  ##### Fields
  * Album Name
  * Price
  * Artists Name
  * Image Url
  ##### Acceptance Criteria
  * Add album button is in the list album page. 
  * All input fields are required.
  * Album name must contain atleast 2 characters and must not be empty.
  * Price field accepts only numbers.
  * Artist name must contain atleast 1 character and must not be empty.
  * Only image url can accepts in this field. 
  * If everything is validated the details will store in localstorage and redirect to album list page. 
 
 ### 4. List Albums :
  ##### Acceptance Criteria
  * After clicking Product page click the albums image it will redirect to list album page.
  * The details given in the Add Album Page is showed in the List Album Page.
  * The details taken from the localstorage Add Album Page are shown in the Album List Page.
  * Album Name, Price, Artist Name, Image of the Albums are listed in this page.

 