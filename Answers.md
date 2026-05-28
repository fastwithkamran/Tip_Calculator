** Answer 1 **

1- Simply download the files in the repository

2- Copy and paste the files into a newly created local folder 

3- Open an IDE of your choice (for e.g) VSCode **or** Download VSCode from https://code.visualstudio.com/download 

4- Select and open the folder, in which you have paste the downloaded files

5- Run, test, and can edit the code

**Link** : https://tip-calculator-three-pearl.vercel.app

** Answer 2 **

I used HTML, CSS and JavaScript to built my assignment. Since, these are easy, native and fundamental languages use to create websites. 

I opt for these cause;

**HTML** : To built the foundation of the page including forms and title
**CSS**  : To design the layout of the page; theme and animation
**JS**   : For to do calculations on backend and display error messages on wrong input; as user inputs the calculation progresses

**Design Choices**

I used; display flex property to center the title and container on the page in body, flex direction to define the axis, which i choose Y, to align elements from top to bottom centrally I used justify content center (main axis) and align items center (cross axis).

I used media query for different screen sizes, also defined max-width and min-height in .container to avoid stretching/compressing too much on large screen sizes

** Answer 3 **

I developed the page wrt to the desktop screen size, for smaller screens i.e. <768px used media query for responsive design.

On 360px width, the code runs media query for <768px and switches container to 90 viewport width, also increases the form padding, and font sizes for different elements.

On 1440px width, the container uses 50vw, with max-width as 500px, form padding sets to 3vw, and also increases font sizes for different elements.

For accessbility, I add **for** keyword inside label tags, matching the id defined in the corresponding input tag. This ensures screen readers announce the label text only when that input is focused.

I skipped, the responsive sizes and clean design for tip_percentage set (10%,15%,20%) buttons, due to time complexity.

** Answer 4 **

I used Antigravity IDE, that check my bugs in the code upon after I developed some new features. I used it to correct the syntax errors coming while writing javascript. Also it helps me to refine my logic, that i had used, for e.g I used multiple conditional statements to check correct user input, it recommend to use a extra variable, but later I refine the IDE logic as well, by adding return statements on false input.

At another place, I found a bug on clicking my reset button changing colors,background color. After searching 5 mins, I prompt AI to find the bug which list to this specific function where i call change_tip_percent_button_preset function, given parameters this, and a value. The pointer this keyword was the problem, it recommend me to replace with a syntax, that is changing colors of error messages instead of tip_percent buttons, it hallucinates. I write the correct syntax that correctly changes the tip_percent buttons preset colors, while solving the reset button bug.

** Answer 5 **

I skipped, the responsive sizes and clean design for tip_percentage set (10%,15%,20%) buttons, due to time complexity. If i got a day, I will write a clean layout for the buttons for all screen sizes.

** Rounding Policy **

For rounding policy, I think of two options to used first fixed the result to two decimal places, which affecting the vendor to lose some cents, while other option was that I used Math.ceil() to round the floating point number to the next close integer, which equally and fairly distributes money to the given number of people, and else also not affecting the vendor.