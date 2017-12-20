# SeleniumGridTest

To test the program, use these to commands for the hub and node.

## Hub
	java -jar selenium-server-standalone-3.6.0.jar -role hub

This will fire the hub on port 4444 by default.

## Node

	java -Dwebdriver.chrome.driver="C:\tools\chromedriver_win32\chromedriver.exe" -jar selenium-server-standalone-3.6.0.jar -role node -hub http://localhost:4444/grid/register

This is initializing the Chrome driver and firing a node and registering with the hub. After this, simply run the Java program SeleniumGridTest. In this case, I was using Chrome as the browser for my tests. FF was updated to 56 and it has been failing for some reason. 	