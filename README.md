# A couple of plans for the website

## Homepage
-Further Design The Frontpage:
This fits into three main components:
1. More components. What Other Elements should populate the front page?
	-A short breakdown of what the site is about etc.
	-Example cards.
2. Make current components interactive:
	-Implement spin animation of Hero icon
	-Make navbar semi-functional
	-Implement fancy issue buttons
3. Tweak and personalise design
	-Focus on making personal reusable buttons.
	-Find better colour scheme etc

## Some extra stuff
-Write down on paper my component based article idea. Build individual frames which each contain snippets of information and interactivity that woven together to
communicate information. Based on the ABC story lab. Goal is for these components to become reusable so that building articles is easy.

-Additionally, I need to think about how to create these articles. Do I want to pass in static props that next then builds into html with dynamic paths? Or should I focus on static paths
an implement that functionality later.

## Longterm
1. Post to Git
2. Create readme.md
3. Create documentation for reusability
4. Create a blog that documents the process of each day

## Diary Of Work

### 27/06/2022

#### Plan for Today:
1. Make interactivity of hero page icon.
    - Should spin on click and then redirect to first-issue
2. Establish plan for component-based article system.
    - Get basic frame system started
3. Restyle homepage

#### Component plan:
##### Outline of what user's will see:
- Users will be presented "frames"
- A frame will take up the entire screen:
	-  The frame will then have interactive components that populated the frame
- Scrolling allows navigation between frames

- The components inside the frames will be called cards. They contain information and interactivity and are placed in the frame using grid/flex

**Style:**
Frames should obey a color scheme while, most cards should be mild.

##### Outline of system to build it:
- Would like to initialize a frame like this:

```
<Article colourscheme=colourscheme> 
	<Frame numCards=numberOfCards>
		<Card position="top-left"> GRAPH CONTENT </Card>
		<Card position="bottom-right"> EXPLANATION CONTENT </Card>
	</Frame>
	
	<Frame numCards=numberOfCards>
		<Card position="top"> IMAGE CONTENT </Card>
		<Card position="bottom"> EXPLANATION CONTENT </Card>
	</Frame>
</Article>
```
Code functionality needs to include:
1. Mobile first approach. Cards should snap to 'flex-col' on small screens\
2. Implement colourscheme, which then populates the colours of each of the frames to create interactivity.
3. Cards should be reusable and hyper-interactive (this is what makes this more than a glorified slideshow.)


#### Stuff Done Today:
1. Made <Navbar /> work on mobile device.
2. Moved <Navbar /> related css to its own folder.
3. Heropage svg made interactive:
	- Switched to [figma](https://www.figma.com/) for design (better svg code-works in jsx) and easier to target id.
	- Made with clickable <a> tags.
	- Added animation using css, from [here](https://www.youtube.com/watch?v=UTHgr6NLeEw&ab_channel=Fireship). 
	- Using css module system to avoid clashes.