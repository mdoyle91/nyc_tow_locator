# NYC Tow Locator

![rihanna2](https://github.com/user-attachments/assets/91d34404-a7f2-403b-8645-a92068b1eac4)


You work at a tow company in NYC, and your company hasn't digitized their filing system. All vehicles that your company tows are logged manually with pen and paper daily, and people finding their vehicles need to wait for attendants to sift through hard copy paper logs across multiple days until they can locate a vehicle. This is time consuming and often unpleasant as its ineffecient for the owner of the vehicle. You've paid a developer to design an application that allows your company to log vehicles that have been towed, so that when vehicle owners call you can let them know right away if your company towed their car or not, saving your company valuable labor time and getting the information to the owner much more swiftly. 

You'd love it if the owner of a vehicle could access a site and tell if your company has towed the car themselves, so that you could deal with a lower call volume. However, the developer said that this would add some additional cost to the project as it would requrie a user login based on different user types, and different functionality of the application based on the user type with some functions restricted for vehicle owners. You decide that you'll need to see how well the application works for you and your employees first before paying for the additional user type features.

## How to Get Started
- Step 1: Set up all backend with three models to start: neighborhood, vehicle location, vehicle.
- Step 2: Begin front end development by creating HTML that corresponds to the app wireframe.
- Step 3: Write asynchronous call functions in Javascript and console.log them to ensure desired data from the API will populate.
- Step 4: Add corresponding EventListeners to the Javascript and test them.
- Step 5: Style CSS for a moblie app (Crucially, this is rather useless if it's only a desktop version as it would need to be logged manually first, then digitized later, which will not optimally save your client labor time.).
- Step 6: Style the CSS for the desktop version.
- (Step 7: Optional): Add vehicle owner functionality. 


## ERD
![ERD_TowCompany drawio (1)](https://github.com/user-attachments/assets/c2d9b3bb-be5c-4078-aab2-e58c0d09eb70)

## Wireframe
![WireFrame_TowCompany drawio](https://github.com/user-attachments/assets/cee04fe1-03f1-47e0-a338-bd05369d73a3)

## MVP
- Able to integrate the front-end and back-end. 
- Prioritize styling the app to satisfaction before integrating any stretch goals
- Full CUD functionality on the front-end for the tow company users.
  
## Stretch Goals
- Try not to use ChatGPT to problem solve until all MVP goals are hit, instead ask peers, reference their project repos, Google, pull your hair out, etc.
- Integrate a user type feature, which restricts certain features for vehicle owners--they can only use read functionality, and not any CUD functionality. 
- Integrate an automatic delete feature, which will remove vehicles from the database after a certain time period--try to be accurate to any record-keeping compliance standards for NYC/NYS. 
  - Bonus: Auto-delete function is location-based (i.e. condition for isLot boolean must be false for it to autodelete as the towing company will not need to track the location of vehicles not on its premises whereas a towed vehicle on a lot may still be there past an auto-delete date.). 

### Credits
- Possibly using city databases for cars and lots, though not sure, yet.

### Project Schedule
- Weekend-Full back-end setup completed. 
- Monday-Create HTML & Javascript Functions, front-end CUD functionality should be the last thing integrated into Javascript.
- Tuesday-Finish HTML & Javascript Functions during first half, move on to styling second half. 
- Wednesday-Styling, make it look impeccable, ensure it's responsive--prioritize the mobile version.
- Thursday-Stretch goals, prioritize user-type feature.

