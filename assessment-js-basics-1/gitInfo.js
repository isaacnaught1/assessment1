/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = 'Git is a form of version control where once a change is made to a project it stores a snap shot to keep a working log or record of changes made so you can see the differences in the code from on snapshot to the next '

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = ' Git Hub is an online cloud where those snapshots can be stored and shared if the project is a group one. Depending on your settings anyone can read it'

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = 'git init is the first step in taking a snap shot, i like to think of it as kind of turning your camera on. you can not take a picture until the camera has been turned on'

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = 'this command copies snapshots of you project or repository from whatever server it may be on'

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = 'this command will show you what files have been changed since your last snapshot '

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

const gitAddDefinition = 'once you see what files have been changed you can add those files to be included in the next snapshot. going back to the camera analogy i liken this to aiming the camera at whateverit is you are going to take a picture of'

const gitAddCode = " git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE 
const gitCommitDefinition = ' git commit is the command to take the snapshot (or take the picture on the camera) and must be acompanied by a messagein order to distinguish one snapshot from the next'
const gitCommitCode = 'git commit -m "insert message here"'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition ='git push is how you send your snap shot to git hub but only if it is not the first time you are pushing it. the first time code mustbe taken from git hub and entered into the terminal. this is like sending your picture to the cloud for storage so that you can access it on multiple devices.'