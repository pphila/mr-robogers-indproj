Describe: roboNum();

Test: "It will take an integer entered as a string and push it into an empty array."
Code: const roboNum = "1";
Expected Output: ["1"]

Test: "It will recognize the number 1 in a longer string of numbers."
Code: const roboNum = "00000100";
Expected Output: [1]

Test: "It will return 'Beep!' instead of the integer 1"
Code: const roboNum = "000000100";
Expected Output: "Beep!"

Test: "It will iterate through a string to recognize the number 2."
Code: const roboNum = "2";
Expected Output: [2]

Test: "It will return 'Boop!' when it recognizes the number 2."
Code: const roboNum = "2";
Expected Output: "Boop!"

Test: "It will iterate through a string to recognize the number 3."
Code: const roboNum = "3";
Expected Output: [3]

Test: "It will return 'Won't you be my neighbor?' when it recognizes the number 3."
Code: const roboNum = "3"
Expected Output: "Won't you be my neighbor?"

Test: "It will return a string of responses according to the number entered."
Code: const roboNum = "5";
Expected Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5"